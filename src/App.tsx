
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
          <Route path='/eldes' element={<Eldes />}/>
        </Routes>
      </BrowserRouter>
      
      

     </div>
  );
};

export default App;
