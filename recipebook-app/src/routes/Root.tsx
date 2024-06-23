import { QueryClient } from '@tanstack/react-query'
import Grid from '../components/Grid'
import { getOptions } from '../API/queries'
import { useLoaderData } from 'react-router'
import Filter from '../components/Filter'
import { createSearchParams } from 'react-router-dom'

export default function Root() {
    const recipes = useLoaderData() as Recipe[]

    return (
        <div className="container">
            <Filter></Filter>
            <Grid recipes={recipes} />
        </div>
    )
}
Root.getLoader = (queryClient: QueryClient) => async ({ request }) => {
    return await queryClient.ensureQueryData(getOptions("recipes", undefined, request.url.split("?")[1]))
}