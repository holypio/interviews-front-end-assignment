import { Link } from "react-router-dom";
import successImg from "../assets/icons/success.svg"

export default function FormSuccessMessage() {
    return (
        <div className="text-center">
            <img src={successImg} style={{ width: '12%' }} alt="success icon" />
            <h3 className="mt-3">Congratulations!</h3>
            <h5>Your recipe has been added!</h5>
            <div className="d-flex justify-content-center p-1">
                <Link className="btn btn-primary rounded px-4 py-1 m-1" to={'/recipe'}>View your recipe</Link>
                <Link className="btn btn-primary rounded px-4 py-1 m-1" to={'/'}>View all recipe</Link>
            </div>
        </div>
    )
}
