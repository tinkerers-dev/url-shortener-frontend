import {ShortenUrlService} from "@/urls/ShortenUrlService.ts";

export const useShortenUrl = (): ShortenUrlService => {
    const shortenUrl = (url: string) => {
        throw new Error("not implemented");
    };
    return {
        shortenUrl
    };
}