

import './CabecalhoFGR.css' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles, faBookBookmark} from '@fortawesome/free-solid-svg-icons';
import imagem1 from "../imagens/looks-tumblr.jpg"
import CabecalhoFGR from './CabecalhoFGR';
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';

const Feed = function() {
    return (
      <>
      <CabecalhoFGR/>
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
    <RodapeFeedGuardaRoupa/>
      </>
      
    );
  }
  
  export default Feed;