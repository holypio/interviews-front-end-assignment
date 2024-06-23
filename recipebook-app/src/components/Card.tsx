import { Link } from 'react-router-dom'
import { API_URL } from '../API/queries'
import '../styles/Card.css'


export default function Card({ recipe }: { recipe: Recipe }) {

    return (
        <div className="col my-3">
            <div className="rounded card h-100">
                <img src={API_URL + recipe.image} className="rounded card-img-top p-3" alt="..." />
                <div className="card-body pt-1">
                    <h5 className="card-title mb-3">{recipe.name}</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item mx-1">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>Italian</Link>
                        </li>
                        <li className="list-inline-item flex-row mx-1">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>Non-Vegetarian</Link>
                        </li>
                        <li className="list-inline-item flex-row mx-1">
                            <Link className="tag btn btn-outline-secondary rounded px-4 disabled" to={'/'}>Hard</Link>
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
