import {render, screen} from "@testing-library/react";
import {GuestShortenUrlForm} from "../../../src/urls/GuestShortenUrlForm.tsx";
import {userEvent} from "@testing-library/user-event";
import {vi} from "vitest";
import * as useShortenUrlHook from "@/urls/useShortenUrl.ts";
import {afterEach} from "node:test";
import {ShortenedUrl} from "@/urls/ShortenedUrl.ts";

async function insertUrl(url: string) {
    const urlToShortenInput = screen.getByLabelText(/URL to shorten/i);
    await userEvent.type(urlToShortenInput, url);
}

async function submitUrl() {
    const shortenUrlButton = screen.getByRole("button", {name: /shorten URL/i});
    await userEvent.click(shortenUrlButton);
}

describe("GuestShortenUrlForm", () => {
    const url = "https://www.example.com";
    const shortenedUrl: ShortenedUrl = {
        key: "abc123",
        originalUrl: url,
        shortUrl: "http://localhost:3000/abc123"
    };
    const shortenUrl: (url: string) => Promise<ShortenedUrl> = vi.fn().mockResolvedValue(shortenedUrl);
    const useShortenUrlSpy = vi.spyOn(useShortenUrlHook, "useShortenUrl");
    useShortenUrlSpy.mockReturnValue({
        shortenUrl,
    });

    afterEach(() => {
        vi.clearAllMocks();
    })

    it("should submit the form with the given URL", async () => {
        render(<GuestShortenUrlForm/>);

        await insertUrl(url);

        await submitUrl();

        expect(shortenUrl).toHaveBeenCalledWith(url)
    })

    it("should display the result of the shortened URL", async () => {
        render(<GuestShortenUrlForm/>);

        await insertUrl(url);

        await submitUrl();

        expect(screen.getByText(shortenedUrl.shortUrl)).toBeVisible();
    })

    it("should show message 'Please submit a valid URL' when given URL is invalid", async () => {
        const url = "bad-example";

        render(<GuestShortenUrlForm/>);

        await insertUrl(url)

        await submitUrl();

        expect(screen.getByText("Please enter a valid URL")).toBeVisible();
    })
})