import { Switch, Route, Redirect } from 'react-router-dom';
import { Episodios } from "../components/Episodios"
import { Estrenos } from '../components/Home/Estrenos';
import { Home } from '../components/Home/Home';
import { Inside } from '../components/Home/Inside';
import { Ranking } from '../components/Home/Ranking';
import { MenuOnline } from '../components/Menu-Online';

export const DashboarHome = ()=>{
    return(
        <>
            <Episodios/>
            <MenuOnline/>
            <div className="contenido_home">
                <Switch>
                    <Route exact path="/home" component={ Home }></Route>
                    <Route exact path="/estrenos" component={ Estrenos } ></Route>
                    <Route exact path="/ranking" component={ Ranking }></Route>
                    <Redirect to="/home" />
                </Switch>
                <Inside/>
            </div>
        </>
    )
}