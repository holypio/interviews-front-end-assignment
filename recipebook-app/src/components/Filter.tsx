import { useRouteLoaderData } from "react-router"
import { DefaultLoaderValues } from "../main"
import FilterButton from "./FilterButton"


export default function Filter() {

    const categories = useRouteLoaderData("default") as DefaultLoaderValues



    return (
        <form className="container">
            <ul className="list-inline">
                {categories.cuisines.map(cuisine => (
                    <FilterButton key={cuisine.id} group='cuisines' name={cuisine.name} value={cuisine.id} />
                ))}
            </ul>
            <ul className="list-inline">
                {categories.difficulties.map(difficulty => (
                    <FilterButton key={difficulty.id} group='difficulties' name={difficulty.name} value={difficulty.id} />
                ))}
            </ul>
            <ul className="list-inline">
                {categories.diets.map(diet => (
                    <FilterButton key={diet.id} group='diets' name={diet.name} value={diet.id} />
                ))}
            </ul>
            <button type="submit" className="btn btn-primary">
                Filter
            </button>
        </form >
    )
}
