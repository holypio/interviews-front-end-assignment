import { queryOptions } from "@tanstack/react-query";
import { Axios } from "axios";

export const API_URL = 'http://localhost:8080'
const axiosClient = new Axios({ "baseURL": API_URL })


async function fetchData(key: string) {
    const response = await axiosClient.get(key)
    console.log(response, "FetchData")
    return JSON.parse(response.data) as Recipe[]
}

export function getOptions(key: string) {
    return queryOptions({
        queryKey: [key],
        queryFn: () => fetchData(key)
    }
    )
}