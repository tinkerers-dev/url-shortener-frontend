import {useMutation} from "react-query";

export const useShortenUrlRequest = () => {
    return useMutation((url: string) => Promise.resolve(url));
}