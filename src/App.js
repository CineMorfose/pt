import { Episodios } from "./components/Episodios";
import { Header } from "./components/Header";

export const App = ()=>{
  return(
    <div>
      <Header/>
      <div className="cuerpo">
        <Episodios/>
      </div>
    </div>
  )
}