import { Link } from "react-router-dom"

export const MenuOnline = ()=>{
    return(
        <div className="menuonline">
            <nav className="navbar navbar-expand-lg navbar">
                <Link className="navbar-brand">Películas Online</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link">ULTIMAS<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">ESTRENOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">RANKING</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">MAS VISTAS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}