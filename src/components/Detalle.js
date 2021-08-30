import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { getComentarios, getMoviesSimilares } from '../helpers/peticiones';
import { Tarjeta } from './Home/Tarjeta';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const Detalle = ({history})=>{
    const imgDefault = "http://assets.stickpng.com/images/585e4beacb11b227491c3399.png";
    const base_url = "https://image.tmdb.org/t/p/original/";

    const[ similares,setSimilares ] = useState([]);
    const[ comentarios,setComentarios ] = useState([]);

    const{ user } = useContext(AuthContext);
    const{ data } = user;
    const{id,title,poster_path,overview,genres,production_companies,production_countries,spoken_languages} = data;

    useEffect( ()=>{
        getMoviesSimilares(id).then(res=>{
            setSimilares(res);
        });
    },[id]);

    useEffect(()=>{
        getComentarios(id).then(result=>{
            setComentarios(result);
        })
    },[id]);

    const truncate = (str,n)=>{
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }
    console.log(comentarios);
    return(
        <div>
            <div className="detalle">
                <img src={ `${base_url}${poster_path}` } alt="imagen" />
                <div className="detalle__content">
                    <h1>{ title }</h1>
                    <div className="detalle__redes">
                        <small>(3.519 votos, promedio: 4.3 de 5)</small>
                        <div className="detalle__duracion">
                            <small>1h 58m</small>
                            <small>2018<span>HD</span></small>
                        </div>
                        <div className="detalle__compartir">
                            <small><ShareIcon/>Compartir</small>
                            <FacebookIcon className="icon facebook"/>
                            <TwitterIcon className="icon twitter"/>
                        </div>
                    </div>
                    <p className="detalle__texto">{ overview }</p>
                    <div className="detalle__datos">
                        <div className="detalle_lista">
                            <label>Generos:</label>
                            <ul className="list-inline">
                                {
                                    genres.map( (res)=>(
                                        <li key={res.id}>{res.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="detalle_lista">
                            <label>Producciones:</label>
                            <ul className="list-inline">
                                {
                                    production_companies.map( (res)=>(
                                        <li key={res.id}>{res.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="detalle_lista">
                            <label>Cuidades:</label>
                            <ul className="list-inline">
                                {
                                    production_countries.map( (res)=>(
                                        <li key={res.id}>{res.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="detalle_lista">
                            <label>Lenguajes:</label>
                            <ul className="list-inline">
                                {
                                    spoken_languages.map( (res)=>(
                                        <li key={res.english_name}>{res.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link to="#">Ver mas actores</Link>
                    </div>
                </div>
            </div>
            <div className="comentarios">
                {
                    comentarios.map((comentario)=>(
                        <div className="comentario__content" key={comentario.id}>
                            <img src={`${(comentario.detalle.avatar_path === null)? imgDefault:base_url+comentario.detalle.avatar_path }`} alt="usuario"/>
                            <div className="comentario__texto" key={ comentario.id }>
                                <h5>{ comentario.autor }</h5>
                                <small>{ comentario.fecha }</small>
                                <p>{ truncate(comentario.comentario,400)}</p>
                                <div className="comentario__iconos">
                                    <ThumbDownIcon className="icon"/>
                                    <ThumbUpAltIcon className="icon"/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="similares">
                <div className="d-flex justify-content-start similar__title">
                    <h1>PELICULAS SIMILARES</h1>
                </div>
                <div className="similares__card">
                    {
                        similares.map( (movie)=>(
                            <Tarjeta
                            key={movie.id }
                            movieId={ movie.id}
                            history={ history }
                            img={ movie.path }
                            anio={ movie.date }
                            title={ movie.title }/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}