export const Row = ({img,title,calificacion,duracion,anio})=>{
    return(
        <div className="row_card">
            <img src={ img } alt="Imagen" />
            <div className="row__content">
                <p>{ title }</p>
                <div>
                    <p>{ calificacion }</p>
                    <small>{ duracion }</small>
                    <small>{ anio } <span>HD</span></small>
                </div>
            </div>
        </div>
    )
}