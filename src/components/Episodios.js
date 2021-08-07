import { Episodio } from "./Episodio";

export const Episodios = ()=>{
    return(
        <div className="episodios">
            <Episodio 
                imagen="https://www.ecestaticos.com/image/clipping/abbaf2ad6da2b2603f43ce9767a3fe1f/las-claves-por-las-que-juego-de-tronos-se-ha-convertido-en-todo-un-fenomeno-mundial.jpg"
                titulo="Juego de tronos"
                numero="1x20"
                fecha="2018-01-01"
            />
        </div>
    )
}