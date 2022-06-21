
import './CabecalhoSite.css'
import imagemLupa from '../imagens/lupa.svg'
import imagemLogo from '../imagens/imagemlogo.png'
const CabecalhoSite = function(){
    return (
        <header className='CabecalhoSite'>
            <main className='CabecalhoSiteFrom'>
                <img src={imagemLogo} className='logo' alt="Logo" />
                
                <div className='pesquisa'>
                    <input type="text" className='PesquisaCabecalho' name='Search' placeholder='Pesquisar' />
                    <a href="" className='botaoPesquisa'>
                        <img src={imagemLupa} className='ImagemBotao' alt="Lupa"  />
                    </a>
                </div>

            </main>

        </header>
    
            
        
        
    );
};
export default CabecalhoSite;