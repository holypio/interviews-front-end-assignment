import { queryOptions } from "@tanstack/react-query";
import { Axios } from "axios";

export const API_URL = 'http://localhost:8080'
const axiosClient = new Axios({ "baseURL": API_URL })


async function fetchData(key: APIResources, filterParams?: any) {
    // const response = await axiosClient.get(key + "?" + filterParams, { params: filterParams })
    const response = await axiosClient.get(key + "?" + filterParams)
    return JSON.parse(response.data) as unknown
}

export function getOptions(key: APIResources, staleTime?: number, filterParams?: any) {
    return queryOptions({
        queryKey: [key],
        queryFn: () => fetchData(key, filterParams),
        staleTime: staleTime
    })
}

export function postRecipe(newRecipeData: FormData) {
    return axiosClient.postForm('/recipes', newRecipeData)
}


export function getItemById<T extends { id: string }>(arr: T[], id: string) {
    const filtered = arr.filter((element) => element.id == id)
    if (filtered.length == 0) {
        return null
    }
    return filtered[0]
}