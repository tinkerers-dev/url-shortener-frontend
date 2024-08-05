import {ShortenedUrl} from "@/urls/ShortenedUrl.ts";

export interface UrlRepository {
    shortenUrl(url: string): Promise<ShortenedUrl>
}