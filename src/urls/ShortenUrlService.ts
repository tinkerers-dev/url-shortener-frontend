import {ShortenedUrl} from "@/urls/ShortenedUrl.ts";

export interface ShortenUrlService {
    shortenUrl(url: string): Promise<ShortenedUrl>
}