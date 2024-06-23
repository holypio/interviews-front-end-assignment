import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {


    return (
        <nav className="shadow navbar mb-5 navbar-expand-lg">
            <div className="container-fluid">
                <Link to={'/'}><img className="logo" src="/icon.svg" alt="Logo" /></Link>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            SnapFood
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Italian
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">
                                    American
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">
                                    Mexican
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">
                                    Indian
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">
                                    Japenese
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary rounded px-4 py-1" to={'/form'}>Add your recipe!</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav >

    )
}
