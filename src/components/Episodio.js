

export const Episodio = ({imagen,numero,titulo,fecha})=>{
    return(
        <div className="episodio">
            <div className="episodio__card">
                <img src={ imagen } alt="imagen"/>
                <h5>{ titulo }</h5>
                <p>{ numero }</p>
                <small>{ fecha }</small>
            </div>
        </div>
    )
}