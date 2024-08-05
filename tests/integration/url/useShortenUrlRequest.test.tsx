import {http, HttpResponse} from "msw";
import {setupServer} from "msw/node";
import {config} from "@/config";
import {useShortenUrlRequest} from "@/urls/api/useShortenUrlRequest.ts";
import {act, renderHook} from "@testing-library/react";
import {QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/react-query";

const shortenUrlApiSpy = () => {
    let calls = 0;
    const calledWith: Record<number, string> = {};
    return {
        calls: () => calls,
        nthCalledWith: (n: number) => calledWith[n],
        reset: () => calls = 0,
        handler: http.post<{ url: string }>(`${config.URL_SHORTENER_API}/shorten-url`, async ({request}) => {
            const body = await request.json() as { url: string };
            calls++;
            calledWith[calls] = body.url;
            return HttpResponse.json({shortUrl: "https://short.url", originalUrl: body.url}, {status: 201})
        })
    }
}

describe("useShortenUrlRequest", () => {
    const {calls, handler, nthCalledWith} = shortenUrlApiSpy();

    beforeEach(() => {
        const server = setupServer(handler);
        server.listen()
    })

    it("should send a shorten url request with received url in the body", async () => {
        const url = "https://www.example.com";
        const {result} = renderHook(() => useShortenUrlRequest(), {
            wrapper: ({children}) => (
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            )
        });

        await act(async () => {
            await result.current.mutateAsync(url);
        })

        expect(calls()).toBe(1);
        expect(nthCalledWith(1)).toBe(url);
    })
})