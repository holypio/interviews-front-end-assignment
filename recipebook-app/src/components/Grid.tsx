import Card from './Card'

export default function Grid({ recipes }: { recipes: Recipe[] }) {

    return (
        <div className="container py-5 my-5">
            <h1 className="mt-3 text-center">Snap a recipe!</h1>
            <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
                {recipes.map((recipe: Recipe) => (
                    <Card key={recipe.id} recipe={recipe}></Card>
                ))}
            </div>
        </div>
    )
}
