
import { useEffect, useState } from "react"
import { getGeneroRanking } from "../../helpers/peticiones";
import { Tarjeta } from "./Tarjeta"

export const Ranking = ({history})=>{

    const[ ranking,setRanking ] = useState([]);

    useEffect( ()=>{
        getGeneroRanking().then( ranki =>{
            setRanking(ranki);
        });
    },[]);
    
    console.log(ranking);
    return(
        <div className="home_content">
            {
                ranking.map( (movie)=>(
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