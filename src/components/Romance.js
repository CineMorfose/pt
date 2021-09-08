import { useEffect, useState } from "react"
import { getGenero } from "../helpers/peticiones";
import { Tarjeta } from "./Home/Tarjeta";

export const Romance = ({history})=>{
    const[romances,setRomances ] = useState([]);
    
    useEffect( ()=>{
        getGenero(10749).then(res=>{
            setRomances(res);
        });
    },[]);

    return(
        <div className="home_content">
            {
                romances.map( (movie)=>(
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