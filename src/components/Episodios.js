import { Episodio } from "./Episodio";

export const Episodios = ()=>{
    return(
        <div className="episodios">
            <div className="episodios__letf">
                <h1>Episodios</h1>
                <button className="btn btn-primary">Ver mas series</button>
            </div>
            <div className="episodios__rigth">
                <Episodio 
                    imagen="https://www.ecestaticos.com/image/clipping/abbaf2ad6da2b2603f43ce9767a3fe1f/las-claves-por-las-que-juego-de-tronos-se-ha-convertido-en-todo-un-fenomeno-mundial.jpg"
                    titulo="Juego de tronos"
                    numero="1x20"
                    fecha="2018-01-01"
                />
                <Episodio 
                    imagen="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/09/03/15991186906126.jpg"
                    titulo="Juego de tronos"
                    numero="1x20"
                    fecha="2018-01-01"
                />
                <Episodio 
                    imagen="https://www.ecestaticos.com/image/clipping/abbaf2ad6da2b2603f43ce9767a3fe1f/las-claves-por-las-que-juego-de-tronos-se-ha-convertido-en-todo-un-fenomeno-mundial.jpg"
                    titulo="Juego de tronos"
                    numero="1x20"
                    fecha="2018-01-01"
                />
                <Episodio 
                    imagen="https://www.ecestaticos.com/image/clipping/abbaf2ad6da2b2603f43ce9767a3fe1f/las-claves-por-las-que-juego-de-tronos-se-ha-convertido-en-todo-un-fenomeno-mundial.jpg"
                    titulo="Juego de tronos"
                    numero="1x20"
                    fecha="2018-01-01"
                />
            </div>
        </div>
    )
}