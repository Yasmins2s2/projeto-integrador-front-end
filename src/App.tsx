import Cabecalho from "./components/Cabecalho";
import './App.css';
import CabecalhoSite from "./components/CabecalhoSite";

const App = function() {
  return (
   <div className="app">
      <CabecalhoSite/>
      <Cabecalho/>
     </div>
  );
}

export default App;
