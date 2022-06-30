import './CabecalhoFGR.css';
import './CabecalhoSite.css';
import imagemLupa from '../imagens/lupa.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
const CabecalhoFGR = function() {
    return (
    <>
         <header className='CabecalhoGuardaroupa'>
            <main className='CabecalhoGuardaRoupaFrom'>
              
                <div className='TextoInicio1'>
                    <h1>AppFel</h1>
                </div>
                
                <label className={'foto'}>
                    <span className='label'>Pesquisar:</span>
                   
                    <a href="" className='botaoPesquisa'>
                        <img src={imagemLupa} className='ImagemBotao' alt="Lupa"  />
                    </a>
                </label>

            </main>

        </header>
    </>
             
    )
};

export default CabecalhoFGR;
 /* c    display: flex;
    align-items: center;
    justify-content: center; */