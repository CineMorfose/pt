
export const Tarjeta = ({img,anio,title})=>{
    return(
        <div className="tarjeta">
            <img src={ img } alt="imagen"/>
            <div className="tarjeta__texto">
                <p>{ anio }</p>
                <label>{ title }</label>
            </div>
        </div>
    )
}