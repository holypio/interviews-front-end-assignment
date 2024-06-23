import { Link, useRouteLoaderData } from 'react-router-dom'
import { API_URL, getItemById } from '../API/queries'
import '../styles/Card.css'
import { DefaultLoaderValues } from '../main'


export default function Card({ recipe }: { recipe: Recipe }) {
    const categories = useRouteLoaderData("default") as DefaultLoaderValues

    return (
        <div className="col my-3">
            <div className="rounded card h-100">
                <img src={API_URL + recipe.image} className="rounded card-img-top p-3" alt="..." />
                <div className="card-body pt-1">
                    <h5 className="card-title mb-3">{recipe.name}</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>{getItemById(categories.cuisines, recipe.cuisineId)?.name}</Link>
                        </li>
                        <li className="list-inline-item flex-row">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>{getItemById(categories.difficulties, recipe.difficultyId)?.name}</Link>
                        </li>
                        <li className="list-inline-item flex-row">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>{getItemById(categories.diets, recipe.dietId)?.name}</Link>
                        </li>
                    </ul>
                    {/* <p className="card-text">{recipe.instructions}</p> */}
                </div>
                <div className="d-flex justify-content-around mb-3">
                    <h3>{recipe.difficultyId}</h3>
                    <button className="btn btn-primary rounded">View Details</button>
                </div>
            </div>
        </div >
    )
}
