import './Cabecalhofeed.css';
import './cabecalho2' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import imagem1 from "../imagens/roupa.jpg"

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
              <img src="" alt="" />
                @LukacomK 
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className='Foto1'>
              <img src={imagem1} alt="" />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faBookmark} />
            </div>
            

           </div>
         </div>
       </main>
       <footer>
         Rodapé
         <div className='icones2'>
            <FontAwesomeIcon icon={faHouseChimney} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <FontAwesomeIcon icon={faUser} />
          </div>
       </footer>
      </>
    );
  }
  
  export default Cabecalho;