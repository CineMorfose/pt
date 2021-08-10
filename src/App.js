// import { Episodios } from "./components/Episodios";
import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { AuthReducer } from "./auth/AuthReducer";
import { Header } from "./components/Header";
import { AppRouter } from "./routes/AppRouter";

const init = ()=>{
  return {
    logged:false
  }
}

export const App = ()=>{
  const[user,dispatch ] =  useReducer(AuthReducer,{},init);

  return(
    <div>
      <Header/>
      <div className="cuerpo">
        <AuthContext.Provider value={{ user,dispatch }}>
          <AppRouter/>
        </AuthContext.Provider>
      </div>
    </div>
  )
}