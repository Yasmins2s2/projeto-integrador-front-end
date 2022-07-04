
import './CabecalhoSite.css'
import imagemLupa from '../imagens/lupa.svg'
import { useState } from 'react';

const Buscar = function(){
    const [pesquisaAberto, setPesquisaAberto] = useState(false);
    const campoPesquisaClicado = function () {
        setPesquisaAberto(! pesquisaAberto);
    };

    return (
        <header className='CabecalhoSite'>
            <main className='CabecalhoSiteFrom'>

                <label className={pesquisaAberto ? 'pesquisa aberto' : 'pesquisa'}>
                    <span className='label'>Pesquisar:</span>
                    <input onClick={campoPesquisaClicado} type="text" className='PesquisaCabecalho' name='Search' placeholder='Pesquisar' />
                    <a href="" className='botaoPesquisa'>
                        <img src={imagemLupa} className='ImagemBotao' alt="Lupa"  />
                    </a>
                </label>

            </main>

        </header>
    )
};
    export default Buscar;