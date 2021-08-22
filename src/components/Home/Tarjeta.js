
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Tarjeta = ({img,anio,title,history})=>{
    const {dispatch } = useContext(AuthContext);

    const handDetalle = ()=>{
        dispatch({
            type:types.SetDetalle
        })

        history.push('/detalle');
    }

    return(
        <div className="tarjeta" onClick={ handDetalle }>
            <img src={ img } alt="imagen"/>
            <div className="tarjeta__texto">
                <p>{ anio }</p>
                <label>{ title }</label>
            </div>
        </div>
    )
}