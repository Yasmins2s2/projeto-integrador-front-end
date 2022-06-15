import Cabecalho from "./components/Cabecalhofeed";
import './App.css';
import CabecalhoSite from "./components/CabecalhoSite";
import Cadastrar from "./components/Cadastrar";

const App = function() {
  return (
   <div className="app">
      <CabecalhoSite/>
      <Cabecalho/>
      <Cadastrar/>
     </div>
  );
}

export default App;
