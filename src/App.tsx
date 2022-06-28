
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CadsatroGuardaRoupa from './CadastroGuardaRoupa';
import Cadastrar from './components/Cadastrar';
import Feed from './components/Feed';
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
          <Route path='/guardaroupa' element={<GuardaRoupa />}/>
          <Route path='/cadastro-guarda-roupa' element={<CadsatroGuardaRoupa />} />
        </Routes>
      </BrowserRouter>

     </div>
  );
};

export default App;
