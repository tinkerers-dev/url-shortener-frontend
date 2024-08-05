import {render, screen} from "@testing-library/react";
import {GuestShortenUrlForm} from "../../../src/urls/GuestShortenUrlForm.tsx";
import {userEvent} from "@testing-library/user-event";
import {vi} from "vitest";
import * as useShortenUrlHook from "../../../src/urls/useShortenUrl.tsx";
import {afterEach} from "node:test";

async function insertUrl(url: string) {
    const urlToShortenInput = screen.getByLabelText(/URL to shorten/i);
    await userEvent.type(urlToShortenInput, url);
}

async function submitUrl() {
    const shortenUrlButton = screen.getByRole("button", {name: /shorten URL/i});
    await userEvent.click(shortenUrlButton);
}

describe("GuestShortenUrlForm", () => {
    const shortenUrl: (url: string) => void = vi.fn();
    const useShortenUrlSpy = vi.spyOn(useShortenUrlHook, "useShortenUrl");
    useShortenUrlSpy.mockReturnValue({
        shortenUrl,
    });

    afterEach(() => {
        vi.clearAllMocks();
    })

    it("should submit the form with the given URL", async () => {
        render(<GuestShortenUrlForm/>);

        const url = "https://www.example.com";
        await insertUrl(url);

        await submitUrl();

        expect(shortenUrl).toHaveBeenCalledWith(url)
    })

    it("should show message 'Please submit a valid URL' when given URL is invalid", async () => {
        render(<GuestShortenUrlForm/>);

        const url = "bad-example";
        await insertUrl(url)

        await submitUrl();

        expect(screen.getByText("Please enter a valid URL")).toBeVisible();
    })
})