import * as axios from "axios";
import {config, Environment} from "@/config";

function createUrlShortenerRequest(config: Environment) {
    return axios.default.create({
        baseURL: config.URL_SHORTENER_API,
    });
}

export const urlShortenerRequest = createUrlShortenerRequest(config);