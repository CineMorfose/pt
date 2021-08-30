import { Link } from "react-router-dom"

export const MenuOnline = ()=>{
    return(
        <div className="menuonline">
            <nav className="navbar navbar-expand-lg navbar">
                <Link className="navbar-brand" to="#">Películas Online</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="home">ULTIMAS<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="estrenos">ESTRENOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ranking">RANKING</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="masvistas">MAS VISTAS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}