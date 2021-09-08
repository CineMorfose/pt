import { useEffect, useState } from "react";
import { getGenero } from "../helpers/peticiones";
import { Tarjeta } from "./Home/Tarjeta";

export const Comedia = ({history})=>{
    const[ comedias,setComedias ] = useState([]);

    useEffect(()=>{
        getGenero(35).then(res=>{
            setComedias(res);
        });
    });    
     
    return(
        <div className="home_content">
            {
                comedias.map( (movie)=>(
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