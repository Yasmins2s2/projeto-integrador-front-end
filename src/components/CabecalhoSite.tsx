import './Cabecalho.css'
import './CabecalhoSite.css'
const CabecalhoSite = function(){
    return (
        <header className='CabecalhoSite'>
            <main className='CabecalhoSiteFrom'>
                <div className='logo'>
                    <img src="" alt="Logo" />
                </div>
                <div className='pesquisa'>
                    <input type="text" className='PesquisaCabecalho' name='Search' placeholder='Pesquisar' />
                    <a href="" className='botaoPesquisa'>
                        <img src="" className='ImagemBotao' alt="Lupa"  />
                    </a>
                </div>

            </main>

        </header>
    
            
        
        
    );
};
export default CabecalhoSite;