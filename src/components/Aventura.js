import { useEffect, useState } from "react"
import { getGenero } from "../helpers/peticiones";
import { Tarjeta } from "./Home/Tarjeta";

export const Aventura = ({history})=>{
    const[ aventuras,setAventuras ] = useState([]);

    useEffect(()=>{
        getGenero(12).then(res=>{
            setAventuras(res);
        });
    });    
     
    return(
        <div className="home_content">
            {
                aventuras.map( (movie)=>(
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