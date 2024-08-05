import {render, screen} from "@testing-library/react";
import {GuestShortenUrlForm} from "../../../src/urls/GuestShortenUrlForm.tsx";
import {userEvent} from "@testing-library/user-event";
import {vi} from "vitest";
import * as useShortenUrlHook from "../../../src/urls/useShortenUrl.tsx";

describe("GuestShortenUrlForm", () => {
    it("should submit the form with the given URL", async () => {
        const shortenUrl: (url: string) => void = vi.fn();
        const useShortenUrlSpy = vi.spyOn(useShortenUrlHook, "useShortenUrl");
        useShortenUrlSpy.mockReturnValue({
            shortenUrl,
        });

        vi.doMock("@/hooks/useShortenUrl.tsx", () => ({}));

        render(<GuestShortenUrlForm/>);

        const url = "https://www.example.com";
        const urlToShortenInput = screen.getByLabelText(/URL to shorten/i);
        await userEvent.type(urlToShortenInput, url);

        const shortenUrlButton = screen.getByRole("button", {name: /shorten URL/i});
        await userEvent.click(shortenUrlButton);

        expect(shortenUrl).toHaveBeenCalledWith(url)
    })
})