
import logo from '../images/logocuevana.png';
import { Link } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';


export const Menu = ()=>{
    return(
        <div className="menu">
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand">
                    <img src={logo} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="home">Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Géneros
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item">Accion</Link>
                                <Link className="dropdown-item" to='/aventura'>Aventura</Link>
                                <Link className="dropdown-item" to='/comedia'>Comedia</Link>
                                <Link className="dropdown-item" to='/romance'>Romance</Link>
                                <Link className="dropdown-item" to='/drama'>Drama</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Películas
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item">Estrenos</Link>
                                <Link className="dropdown-item">Ranking</Link>
                                <Link className="dropdown-item">Mas vistas</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Series
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item">Series</Link>
                                <Link className="dropdown-item">Episodios</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="menu__left">
                    <div className="menu__buscar">
                        <input type="text" placeholder="Buscar peliculas..." />
                        <SearchIcon/>
                    </div>
                    <p>Entrar</p>
                    <button className="btn btn-primary">Registro</button>
                </div>
            </nav>
        </div>
    )
}