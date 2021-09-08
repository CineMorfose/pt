
import { useEffect, useState } from "react"
import { getGenero } from "../../helpers/peticiones";
import { Tarjeta } from "./Tarjeta"

export const Home = ({history})=>{
    
    const[ ultimas,setUltimas ] = useState([]);

    useEffect( ()=>{
        getGenero(28).then( accion =>{
            setUltimas(accion);
        });
    },[]);
    
    return(
        <div className="home_content">
            {/* {
                ultimas.map( (movie)=>(
                    <Tarjeta
                        key={ movie.id }
                        movieId={ movie.id}
                        history={ history }
                        img={ movie.path }
                        anio={ movie.date }
                        title={ movie.title }/>
                ))
            } */}
        </div>
    )
}