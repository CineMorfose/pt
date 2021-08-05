import '../estilos/style.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Menu } from './Menu';


export const Header = ()=>{
    return(
        <div className="header">
            <Menu/>
            <div className="header__title">
                <h1>Jungle cuise</h1>
                <span>pelicula</span>
            </div>
            <div className="header__hora">
                <p>4.34/5</p>
                <p>1h 50m 2021</p>
                <span>HD</span>
            </div>
            <p>Film ambientado a principios del siglo XX. Frank (Interpretado por Dwayne Johnson) 
                es el carismático capitán de una peculiar embarcación que recorre la selva amazónica. 
                Allí, a pesar de los peligros que el río Amazonas les tiene preparados, Frank llevará en su barco a la científica Lily Houghton 
                (Interpretada por Emily Blunt) y a su hermano McGregor Houghton (Interpretado por Jack Whitehall).</p>
            <div className="header__button">
                <PlayArrowIcon/>
                <button>Ver pelicula</button>
            </div>

        </div>
    )
}