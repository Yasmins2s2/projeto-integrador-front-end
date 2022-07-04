

import './Feed.css' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faBookmark, faComment, faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import imagem1 from "../imagens/MeninaDeCostas.jpg"
import VogueBrasil from "../imagens/VogueBrasil.png"
import vogue from '../imagens/vogue.png'
import CabecalhoFGR from './CabecalhoFGR';
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';

const Feed = function() {
    return (
      <>
      <CabecalhoFGR/>
      <main>
      <div className='border'>
        <div className='conteudo'>
         <div className='VogueBrasil'>
           <img src={VogueBrasil} alt="" />
           <p>@voguebrasil <FontAwesomeIcon icon={faCircleCheck} className='iconesf' /></p>   
           <div className='icones2'>
             <FontAwesomeIcon icon={faHeart} className='iconesf' /> 
             <FontAwesomeIcon icon= {faComment} className='iconesf'/> 
             <FontAwesomeIcon icon={faBookmark} className='iconesf' />
             </div>
         </div>
         <div className='Foto1'>
         <img src={vogue} alt="" />
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