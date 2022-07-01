import './Cabecalhofeed.css';
import './CabecalhoFGR' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles, faBookBookmark} from '@fortawesome/free-solid-svg-icons';
import imagem1 from "../imagens/looks-tumblr.jpg"

const Cabecalho = function() {
    return (
      <>
       <header className='CabecalhoFeed'> 
          <div className='Logo'>
            <h1>AppFell</h1>
          </div>
          <div className='icones'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSquarePlus} />
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
       </header>
       <main>
         <div className='border'>
           <div className='conteudo'>
            <div className='Foto1'>
              <img src={imagem1} alt="" />
              <p>@Isabella</p>   
              <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf' />
                <FontAwesomeIcon icon= {faComment} className='iconesf'/>
                <FontAwesomeIcon icon={faBookmark} className='iconesf' />
                </div>
            </div>
            <div className='Foto1'>
            <img src={imagem1} alt="" />
            <p>@Isabella</p> 
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
                <FontAwesomeIcon icon= {faComment} className='iconesf' />
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>
            <div className='Foto1'>
            <img src={imagem1} alt="" />
            <p>@Isabella</p> 
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
                <FontAwesomeIcon icon= {faComment} className='iconesf' />
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>

           </div>
         </div>
       </main>
       <footer>
         
         <div className='icones3'>
            <FontAwesomeIcon icon={faHouseChimney} /> <p className='text-footer'>Feed</p> 
            <FontAwesomeIcon icon={faMagnifyingGlass} /><p className='text-footer'> Buscar</p> 
            <FontAwesomeIcon icon={faWandMagicSparkles} /> <p className='text-footer'>Guarda-Roupa</p> 
            <FontAwesomeIcon icon={faUser} /><p className='text-footer'>Perfil</p> 
          </div>
       </footer>
      </>
    );
  }
  
  export default Cabecalho;
  /* <img src={imagem1} alt="" />*/