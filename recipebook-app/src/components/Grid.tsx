import Card from './Card'
import { getOptions } from '../API/queries'
import { useQuery } from '@tanstack/react-query'

export default function Grid() {
    const { data, isSuccess } = useQuery(getOptions("recipes"))

    if (!isSuccess) {
        return <>{"Loading..."}</>
    }


    return (
        <div className="container py-5 my-5">
            <h1 className="mt-3 text-center">Snap a recipe!</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
                {data.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe}></Card>
                ))}
            </div>
        </div>
    )
}
