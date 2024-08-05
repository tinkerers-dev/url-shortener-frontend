import {ShortenUrlService} from "@/urls/ShortenUrlService.ts";
import {useShortenUrlRequest} from "@/urls/api/useShortenUrlRequest.ts";

export const useShortenUrl = (): ShortenUrlService => {
    const {mutateAsync: shortenUrl, } = useShortenUrlRequest();

    return {
        shortenUrl
    };
}