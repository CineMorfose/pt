
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { getMovieID } from "../../helpers/peticiones";
import { types } from "../../types/types";

export const Tarjeta = ({movieId,img,anio,title,history})=>{

    const imgDefault = "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png";
    const base_url = "https://image.tmdb.org/t/p/original/";

    const {dispatch } = useContext(AuthContext);

    const handDetalle = async(idMovie)=>{
        const getMovie = await getMovieID(idMovie).then(res=>res);
        dispatch({
            type:types.SetDetalle,
            payload:{
                data:getMovie
            }
        })
        history.push('/detalle');
    }

    return(
        <div className="tarjeta" onClick={()=> handDetalle(movieId) }>
            <img src={ `${(img !== null)? base_url+img:imgDefault}` } alt="imagen"/>
            <div className="tarjeta__texto">
                <p>{ anio }</p>
                <label>{ title }</label>
            </div>
        </div>
    )
}