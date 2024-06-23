import Card from './Card'

export default function Grid({ recipes }: { recipes: Recipe[] }) {

    return (
        <>
            <div className="row row-cols-1 row-cols-lg-3 py-3">
                {recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe}></Card>
                ))}
            </div>
        </>
    )
}
