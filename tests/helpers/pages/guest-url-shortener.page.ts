import {expect, Locator, Page} from "@playwright/test";

export class GuestUrlShortenerPage {
    private page: Page;
    private readonly urlInput: Locator;
    private readonly shortenUrlButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.urlInput = page.getByLabel(/URL to shorten/i);
        this.shortenUrlButton = page.getByRole("button", {name: /shorten URL/i});
    }

    async goto() {
        await this.page.goto("/");
    }

    async enterUrl(url: string) {
        await this.urlInput.fill(url);
        await expect(this.urlInput).toHaveValue(url);
    }

    async shortenUrl() {
        await this.shortenUrlButton.click()
    }

    async shouldHaveShortenedUrl(shortUrl: string) {
        await expect(this.page.getByText(shortUrl)).toBeVisible();
    }
}