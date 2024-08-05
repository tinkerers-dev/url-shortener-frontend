import {ShortenedUrl} from "@/urls/ShortenedUrl.ts";
import {urlShortenerRequest} from "@/api/request.ts";

export const shortenUrlRequest = async (url: string): Promise<ShortenedUrl> => {
    const {data} = await urlShortenerRequest.post<ShortenedUrl>("/shorten-url", {url: url});

    return data;
}