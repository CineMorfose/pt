import { useEffect, useState } from "react"
import { getGenero } from "../../helpers/peticiones";
import { Row } from "./Row"

export const Inside =()=>{
    const base_url = "https://image.tmdb.org/t/p/original/";
    const[ estrenos,setEstrenos ] = useState([]);

    useEffect( ()=>{
        getGenero(53).then( res=>{
            setEstrenos(res);
        });
    },[]);

    console.log(estrenos);

    return(
        <div className="inside">
            <div className="inside__top">
                TOP ESTRENOS
            </div>
            {
                estrenos.map( movie =>(
                    <Row
                        key={ movie.id }
                        img={`${base_url}${movie.path}`}
                        title={ movie.title }
                        calificacion="4.26/5"
                        duracion="3h 2m"
                        anio="2019"/>
                ))
            }
        </div>
    )
}