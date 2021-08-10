import { Switch, Route, Redirect } from 'react-router-dom';
import { Episodios } from "../components/Episodios"
import { Home } from '../components/Home';

export const DashboarHome = ()=>{
    return(
        <>
            <Episodios/>
            <div> 
                <Switch>
                    <Route exact path="/home" component={ Home }></Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    )
}