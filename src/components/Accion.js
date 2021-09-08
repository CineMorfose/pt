import { useEffect, useState } from "react"
import { getGenero } from "../helpers/peticiones";
import { Tarjeta } from "./Home/Tarjeta";

export const Accion =({history})=>{
    const[actions,setActions ]= useState([]);

    useEffect( ()=>{
        getGenero(28).then(res=>{
            setActions(res);
        })
    },[]);

    return(
        <div className="home_content">
            {
                actions.map( (movie)=>(
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