import { useEffect, useState } from "react";
import { getGenero } from "../helpers/peticiones";
import { Episodio } from "./Episodio";

export const Episodios = ()=>{
    const base_url = "https://image.tmdb.org/t/p/original/";

    const[ episodios,setEpisodios ] = useState([]);

    useEffect( ()=>{
        getGenero(878).then( res=>{
            setEpisodios(res);
        });
    },[]);

    console.log(episodios);

    return(
        <div className="episodios">
            <div className="episodios__letf">
                <h1>Episodios</h1>
                <button className="btn btn-primary">Ver mas series</button>
            </div>
            <div className="episodios__rigth">
                {
                    episodios.map(movie=>(
                        <Episodio 
                            imagen={`${base_url}${movie.path}`}
                            titulo={movie.title}
                            numero="1x20"
                            fecha="2018-01-01"
                        />
                    ))
                }
            </div>
        </div>
    )
}