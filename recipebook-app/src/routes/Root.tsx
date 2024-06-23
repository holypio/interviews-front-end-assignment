import { QueryClient, useQuery } from '@tanstack/react-query'
import Grid from '../components/Grid'
import { getOptions } from '../API/queries'
import { useLoaderData } from 'react-router'
import Filter from '../components/Filter'
import { useState } from 'react'

export default function Root() {
    let recipes = useLoaderData() as Recipe[]
    const [filter, setFilter] = useState<QueryFilter>({})

    const query = useQuery({ ...getOptions('recipes', undefined, filter), placeholderData: recipes })

    if (query.isSuccess) {
        recipes = query.data as Recipe[]
    }


    return (
        <div className="container">
            <Filter filter={filter} setFilter={setFilter}></Filter>
            <Grid recipes={recipes} />
        </div>
    )
}
Root.getLoader = (queryClient: QueryClient) => async () => {
    return await queryClient.ensureQueryData(getOptions("recipes"))
}