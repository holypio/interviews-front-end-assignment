import { useMutation } from '@tanstack/react-query'
import '../API/queries'
import { postRecipe } from '../API/queries'
import FormSuccessMessage from '../components/FormSuccessMessage'
import { useRouteLoaderData } from 'react-router'
import { DefaultLoaderValues } from '../main'

export default function Form() {
    const categories = useRouteLoaderData("default") as DefaultLoaderValues

    const mutation = useMutation({
        mutationFn: (data: FormData) => {
            return postRecipe(data)
        },
    })

    function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const reicpeData = new FormData(event.target as HTMLFormElement)
        reicpeData.set("ingredients", (reicpeData.get("ingredients") as string).split(",").map((v) => v.trim()).join(","))
        return mutation.mutate(reicpeData)
    }

    if (mutation.isPending) return <p>Adding recipe...</p>
    else if (mutation.isError) {
        <div>An error occurred: {mutation.error.message}</div>

    } else if (mutation.isSuccess) {
        return <FormSuccessMessage />
    }


    return (
        <form onSubmit={handleSubmitForm} className="row w-75 mx-auto g-3">
            <div className="col-md-6">
                <label htmlFor="inputRecipeName" className="form-label">
                    Name
                </label>
                <input type="text" className="form-control" id="inputRecipeName" name="name" placeholder="Spaghetti Carbonara" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputRecipeIngredients" className="form-label">
                    Igredients
                </label>
                <input type="text" className="form-control" id="inputRecipeIngredients" name="ingredients" placeholder="Pasta, Eggs, Black pepper..." required />
            </div>
            <div className="col-12">
                <label htmlFor="inputRecipeInstructions" className="form-label">
                    Instructions
                </label>
                <textarea className="form-control" id="inputRecipeInstructions" name="instructions" rows={3} placeholder="How to cook your recipe..." required />
            </div>
            <div className="col-md-4">
                <label htmlFor="inputRecipeCuisine" className="form-label">
                    Cuisine
                </label>
                <select className="form-select" id="inputRecipeCuisine" name="cuisineId" defaultValue="" required>
                    <option className='d-none' value="" key={null} disabled>Choose...</option>
                    {categories.cuisines.map((cuisine) => (<option value={cuisine.id}>{cuisine.name}</option>))}
                </select>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputRecipeDifficulty" className="form-label">
                    Difficulty
                </label>
                <select className="form-select" id="inputRecipeDifficulty" name="difficultyId" defaultValue="" required>
                    <option className='d-none' value="" key={null} disabled>Choose...</option>
                    {categories.difficulties.map((difficulty) => (<option value={difficulty.id}>{difficulty.name}</option>))}
                </select>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputRecipeDiet" className="form-label">
                    Diet
                </label>
                <select className="form-select" id="inputRecipeDiet" name="dietId" defaultValue="" required>
                    <option className='d-none' value="" key={null} disabled>Choose...</option>
                    {categories.diets.map((diet) => (<option value={diet.id}>{diet.name}</option>))}
                </select>
            </div>

            <div className="col-12">
                <label htmlFor="formFile" className="form-label" >Snap your best recipe!</label>
                <input type="file" className="form-control" id="formFile" name="image" accept="image/*" required />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Add new!
                </button>
            </div>
        </form>

    )
}
