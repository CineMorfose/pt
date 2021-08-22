import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
export const Detalle = ()=>{

    return(
        <div className="detalle">
            <img src="https://lumiere-a.akamaihd.net/v1/images/image_4f447b1d.jpeg" alt="imagen" />
            <div className="detalle__content">
                <h1>Los increibles 2</h1>
                <div className="detalle__redes">
                    <small>(3.519 votos, promedio: 4.3 de 5)</small>
                    <did className="detalle__duracion">
                        <small>1h 58m</small>
                        <small>2018<span>HD</span></small>
                    </did>
                    <di className="detalle__compartir">
                        <small><ShareIcon/>Compartir</small>
                        <FacebookIcon className="icon facebook"/>
                        <TwitterIcon className="icon twitter"/>
                    </di>
                </div>
                <p className="detalle__texto">Helen tiene que liderar una campaña para que los superhéroes regresen, mientras Bob vive su vida “normal” con Violet, Dash y el bebé Jack-Jack —cuyos superpoderes descubriremos—. 
                    Su misión se va a pique cuando aparece un nuevo villano con un brillante plan que lo amenaza todo. 
                    Pero los Parr no se amedrentarán y menos teniendo a Frozone de su parte.</p>
                <div className="detalle__datos">
                    <label><smal>Director:</smal>Brad Bird</label>
                    <label><smal>Genero:</smal>Accion Animacion Aventura</label>
                    <label><smal>Actores:</smal>Alyson Stoner, Barry Bostwick, Bill Wise</label>
                    <Link href="#">Ver mas actores</Link>
                </div>
            </div>
        </div>
    )
}