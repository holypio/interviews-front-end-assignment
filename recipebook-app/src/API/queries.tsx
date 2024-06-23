import { queryOptions } from "@tanstack/react-query";
import { Axios } from "axios";
import { createSearchParams } from "react-router-dom";

export const API_URL = 'http://localhost:8080'
const axiosClient = new Axios({ "baseURL": API_URL })


async function fetchData(key: APIResources, id: string = "", queryFilter?: QueryFilter) {
    const response = await axiosClient.get(key + "/" + id + "?" + createSearchParams(queryFilter).toString())
    return JSON.parse(response.data) as unknown
}

export function getOptions(key: APIResources, id?: string, queryFilter?: QueryFilter) {
    return queryOptions({
        queryKey: [key, queryFilter],
        queryFn: () => fetchData(key, id, queryFilter),
        staleTime: 1000 * 60 * 2
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