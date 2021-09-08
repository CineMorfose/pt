import { useEffect, useState } from "react";
import { getGenero } from "../helpers/peticiones";
import { Tarjeta } from "./Home/Tarjeta";

export const Drama = ({history})=>{
    const[ dramas,setDramas ] = useState([]);

    useEffect(()=>{
        getGenero(18).then(res=>{
            setDramas(res);
        });
    });    
     
    return(
        <div className="home_content">
            {
                dramas.map( (movie)=>(
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