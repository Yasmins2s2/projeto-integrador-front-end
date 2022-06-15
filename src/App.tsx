import Cabecalho from "./components/Cabecalhofeed";
import './App.css';
import CabecalhoSite from "./components/CabecalhoSite";
import Cadastrar from "./components/Cadastrar";
import RodapeSite from "./components/RodapeSite";

const App = function() {
  return (
   <div className="app">
      <CabecalhoSite/>
      <Cabecalho/>
      <Cadastrar/>
      <RodapeSite/>
     </div>
  );
}

export default App;
