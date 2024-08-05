import {useMutation} from "react-query";
import {shortenUrlRequest} from "@/urls/api/api.ts";

export const useShortenUrlRequest = () => {
    return useMutation(shortenUrlRequest);
}