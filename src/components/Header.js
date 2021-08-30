import '../estilos/style.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Menu } from './Menu';
import { useEffect, useState } from 'react';
import { getTopRated } from '../helpers/peticiones';


export const Header = ()=>{

    const[movie,setMovies ] = useState();

    useEffect( ()=>{
        async function fetchData(){
            const respuesta = await getTopRated().then(res => res);
            setMovies(
                respuesta[
                    Math.floor(Math.random() * respuesta.length-1)
                ]
            )
            return respuesta;
        }
        fetchData();
    },[]);

    return(
        <div className="header" 
            style={{
                ackgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.path}")`,
                backgroundPosition:"center center"
            }}
        >
            <Menu/>
            <div className="header__title">
                <h1>{movie.title}</h1>
                <span>pelicula</span>
            </div>
            <div className="header__hora">
                <p>4.34/5</p>
                <p>1h 50m 2021</p>
                <span>HD</span>
            </div>
            <p className="header__texto">{movie.overview}</p>
            <div className="header__button">
                <PlayArrowIcon/>
                <button>Ver pelicula</button>
            </div>

        </div>
    )
}