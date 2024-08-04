import {z} from "zod";
import {shortenUrlSchema} from "@/domain/url/shortenUrlSchema.ts";

export const useShortenUrl = () => {
    const shortenUrl = (data: z.infer<typeof shortenUrlSchema>): void => {
        throw new Error("not implemented");
    };
    return {
        shortenUrl
    };

}