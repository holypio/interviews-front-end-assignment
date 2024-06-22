import { API_URL } from '../API/queries'
import '../styles/Card.css'


export default function Card({ recipe }: { recipe: Recipe }) {

    return (
        <div className="col">
            <div className="rounded card h-100">
                <img src={API_URL + recipe.image} className="rounded card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.instructions}</p>
                </div>
                <div className="d-flex justify-content-around mb-3">
                    <h3>{recipe.difficultyId}</h3>
                    <button className="btn btn-primary rounded">View Details</button>
                </div>
            </div>
        </div >
    )
}
