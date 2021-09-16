import { Link } from "react-router-dom"

export const MenuOnline = ()=>{
    return(
        <div className="menuonline">
            <nav className="online">
                <Link className="navbar-brand" to="#">Películas Online</Link>
                <div>
                    <ul>
                        <li className="nav-item active">
                            <Link className="nav-link" to="home">ULTIMAS<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="estrenos">ESTRENOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ranking">RANKING</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}