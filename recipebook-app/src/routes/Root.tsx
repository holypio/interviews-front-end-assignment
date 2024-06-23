import { QueryClient } from '@tanstack/react-query'
import Grid from '../components/Grid'
import { getOptions } from '../API/queries'
import { useLoaderData } from 'react-router'

export default function Root() {
    const recipes = useLoaderData() as Recipe[]
    return (
        <>
            <Grid recipes={recipes} />
        </>
    )
}
Root.getLoader = (queryClient: QueryClient) => async () => {
    return await queryClient.fetchQuery(getOptions("recipes"))
}