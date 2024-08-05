import {describe} from "vitest";
import {useShortenUrl} from "@/urls/useShortenUrl.ts";
import * as useShortenUrlRequestHook from "@/urls/api/useShortenUrlRequest.ts";
import {UseMutationResult} from "react-query";

describe("useShortenUrl", () => {
    const mutateAsync = vi.fn();
    vi.spyOn(useShortenUrlRequestHook, "useShortenUrlRequest").mockImplementation(() => {
            return {
                mutateAsync: mutateAsync
            } as unknown as UseMutationResult<string, string, string, unknown>
        }
    );

    describe("shortenUrl", () => {
        it("should emit a shorten url request with given url", () => {
            const {shortenUrl} = useShortenUrl();
            const url = "https://www.example.com";

            shortenUrl(url);

            expect(mutateAsync).toHaveBeenCalledWith(url);
        })
    })
});