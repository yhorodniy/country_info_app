import axios, { AxiosRequestConfig, Method } from "axios";
import { SERVER_URL } from "../configs/config";

export const apiRequest = async <T>(
    method: Method,
    endpoint: string,
    onSuccess: (data: T) => void,
    config?: AxiosRequestConfig
) => {
    try {
        const response = await axios({
            method,
            url: `${SERVER_URL}/${endpoint}`,
            ...config
        });
        onSuccess(response.data);
    } catch (error) {
        console.error("Error making API request: ", error);
    }
}