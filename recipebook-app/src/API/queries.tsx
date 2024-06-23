import { queryOptions } from "@tanstack/react-query";
import { Axios } from "axios";

export const API_URL = 'http://localhost:8080'
const axiosClient = new Axios({ "baseURL": API_URL })


async function fetchData(key: APIResources) {
    const response = await axiosClient.get(key)
    console.log(response, "FetchData")
    return JSON.parse(response.data) as unknown
}

export function getOptions(key: APIResources) {
    return queryOptions({
        queryKey: [key],
        queryFn: () => fetchData(key)
    })
}

export function postRecipe(newRecipeData: FormData) {
    return axiosClient.postForm('/recipes', newRecipeData)
}