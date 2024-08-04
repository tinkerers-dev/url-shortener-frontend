import {test} from "@playwright/test";
import {GuestUrlShortenerPage} from "../helpers/pages/guest-url-shortener.page";

test.describe("Given a guest user visits the URL shortener", () => {
    test.describe("When they ask for a URL to be shortened", () => {
        test("Then they should see a shortened version of the URL generated", async ({page}) => {
            const key = "abc123";
            const urlToShorten = "https://example.com";
            const shortUrl = `http://localhost:3000/${key}`;
            await page.route("*/**/shorten-url", async route => {
                await route.fulfill({
                    body: JSON.stringify({
                        key,
                        originalUrl: urlToShorten,
                        shortUrl
                    }),
                    status: 201
                });
            })
            const guestUrlShortener = new GuestUrlShortenerPage(page);
            await guestUrlShortener.goto();

            await guestUrlShortener.enterUrl(urlToShorten);

            await guestUrlShortener.shortenUrl();

            await guestUrlShortener.shouldHaveShortenedUrl(shortUrl);


        })
    })
});

