import Card from './Card'
import { getOptions } from '../API/queries'
import { useQuery } from '@tanstack/react-query'

export default function Grid() {
    const { data, isSuccess } = useQuery(getOptions("recipes"))

    if (!isSuccess) {
        return <>{"Loading..."}</>
    }


    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 py-3">
                {data.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe}></Card>
                ))}
            </div>
        </>
    )
}
