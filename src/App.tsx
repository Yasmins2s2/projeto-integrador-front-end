
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CadsatroGuardaRoupa from './CadastroGuardaRoupa';
import Cadastrar from './components/Cadastrar';
import Feed from './components/Feed';
import CabecalhoFeed from './components/Cabecalhofeed';
import CabecalhoFGR from './components/CabecalhoFGR';
import CarrosselGr from './components/CarrosselGr';
import GuardaRoupa from './components/GuardaRoupa';
import LoginSite from './components/LoginSite';
import Eldes from './Eldes';

const App = function() {
  return (
   <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginSite/>} />
          <Route path='/cadastrar' element={<Cadastrar/>} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/CabecalhoFeed' element={<CabecalhoFeed />}/>
          <Route path='/CabecalhoFGR' element= {<CabecalhoFGR/>}/>
          <Route path='/GuardaRoupa' element={<GuardaRoupa/>}/> 
          <Route path='/cadastro-guarda-roupa' element={<CadsatroGuardaRoupa />} />
        </Routes>
      </BrowserRouter>

     </div>
  );
};

export default App;
