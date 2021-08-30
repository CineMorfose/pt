import { useEffect, useState } from "react";
import { getGenero } from "../../helpers/peticiones";
import { Tarjeta } from "./Tarjeta"

export const Estrenos = ({history})=>{
    const[ estrenos,setEstrenos ] = useState([]);

    useEffect( ()=>{
        getGenero(53).then( estreno =>{
            setEstrenos(estreno);
        });
    },[]);

    return(
        <div className="home_content">
            {
                estrenos.map( (movie)=>(
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
    )
}