import Cabecalho from "./Cabecalhofeed";
import './Cabecalhofeed.css';
import './CabecalhoFGR' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles, faBookBookmark} from '@fortawesome/free-solid-svg-icons';
import imagem1 from "../imagens/looks-tumblr.jpg"

const Feed = function() {
    return (
      <>
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
      </>
      
    );
  }
  
  export default Feed;