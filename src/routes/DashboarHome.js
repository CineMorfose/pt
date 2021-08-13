import { Switch, Route, Redirect } from 'react-router-dom';
import { Episodios } from "../components/Episodios"
import { Home } from '../components/Home/Home';
import { MenuOnline } from '../components/Menu-Online';
import { Ultimas } from '../components/Ultimas';

export const DashboarHome = ()=>{
    return(
        <>
            <Episodios/>
            <MenuOnline/>
            <div className="dashboard"> 
                <Switch>
                    <Route exact path="/home" component={ Home }></Route>
                    <Route exact path="/ultima" component={ Ultimas }></Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}