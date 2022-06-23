
import './CabecalhoSite.css'
import imagemLupa from '../imagens/lupa.svg'
import { useState } from 'react';

const CabecalhoSite = function(){
    const [pesquisaAberto, setPesquisaAberto] = useState(false);
    const campoPesquisaClicado = function () {
        setPesquisaAberto(! pesquisaAberto);
    };

    return (
        <header className='CabecalhoSite'>
            <main className='CabecalhoSiteFrom'>
              
                <div className='TextoInicio'>
                    <h1>AppFel</h1>
                </div>
                
                <label className={pesquisaAberto ? 'pesquisa aberto' : 'pesquisa'}>
                    <span className='label'>Pesquisar:</span>
                    <input onClick={campoPesquisaClicado} type="text" className='PesquisaCabecalho' name='Search' placeholder='Pesquisar' />
                    <a href="" className='botaoPesquisa'>
                        <img src={imagemLupa} className='ImagemBotao' alt="Lupa"  />
                    </a>
                </label>

            </main>

        </header>
    
            
        
        
    );
};
export default CabecalhoSite;