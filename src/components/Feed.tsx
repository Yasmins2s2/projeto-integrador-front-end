

import './Feed.css' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faBookmark, faComment, faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import imagem1 from "../imagens/MeninaDeCostas.jpg"
import VogueBrasil from "../imagens/VogueBrasil.jpg"
import vogue from '../imagens/vogue.jpg'
import CabecalhoFGR from './CabecalhoFGR';
import calvinKlein from '../imagens/CalvinKlein.jpg'
import pabllo  from '../imagens/Pabllo.jpg'
import LudSesion from '../imagens/LudSesion.jpg'
import Kelijaner from '../imagens/Kelijaner.jpg'
import Anitta from '../imagens/Anitta.jpg'
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
           <p>@voguebrasil <FontAwesomeIcon icon={faCircleCheck} className='iconesf' /> </p>            
               <p> 14 mil curtidas </p>
           <div className='icones2'>
             <FontAwesomeIcon icon={faHeart} className='iconesf' /> 
            </div>
            <div className='icones2'>
              <FontAwesomeIcon icon= {faComment} className='iconesf'/> 
            </div>
             <div className='icones2'>
             <FontAwesomeIcon icon={faBookmark} className='iconesf' />
             </div>
         </div>
         <div className='CalvinKlein'>
            <img src={calvinKlein} alt="" />
              <p>@calvinkleinbrasil <FontAwesomeIcon icon={faCircleCheck} className='iconesf' /></p> 
              <p>150 mil curtidas</p>
         
              <div className='icones2'>
                  <FontAwesomeIcon icon={faHeart} className='iconesf'/>
              </div>
              <div className='icones2'>
                    <FontAwesomeIcon icon= {faComment} className='iconesf' />
              </div>
              <div className='icones2'>
                  <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
              </div>
        </div>
         <div className='Vogue'>
         <img src={vogue} alt="" />
         <p>@vogue<FontAwesomeIcon icon={faCircleCheck} className='iconesf' /></p>
         <p>150 mil curtidas</p> 
        
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon= {faComment} className='iconesf' />
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>
        </div>

         <div className='Pabllo'>
            <img src={pabllo} alt="" />
            <p>@pablllovittar <FontAwesomeIcon icon={faCircleCheck} className='iconesf' /></p> 
            <p>800 mil curtidas</p>
         
              <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
              </div>
              <div className='icones2'>
                <FontAwesomeIcon icon= {faComment} className='iconesf' />
              </div>
              <div className='icones2'>
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
              </div>
             
          </div>
         

         <div className='LudSesion'>
            <img src={LudSesion} alt="" />
            <p>@ludmilla <FontAwesomeIcon icon={faCircleCheck} className='iconesf'/></p> 
            <p>500 mil curtidas</p>
            
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon= {faComment} className='iconesf' />
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>
         </div>
         <div className='Anitta'>
            <img src={Anitta} alt="" />
            <p>@anitta <FontAwesomeIcon icon={faCircleCheck} className='iconesf'/></p> 
            <p>700 mil curtidas</p>
            
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
            </div>
            <div className='icones2'>
              <FontAwesomeIcon icon= {faComment} className='iconesf' />
            </div>
            <div className='icones2'>
                   <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>
              
            
         </div>
         <div className='Kalijaner'>
            <img src={Kelijaner} alt="" />
            <p>@kyliejenner <FontAwesomeIcon icon={faCircleCheck} className='iconesf'/></p> 
            <p>5m curtidas </p>
            
            <div className='icones2'>
                <FontAwesomeIcon icon={faHeart} className='iconesf'/>
            </div>
            <div className='icones2'>
              <FontAwesomeIcon icon= {faComment} className='iconesf' />
            </div>
            <div className='icones2'>
                <FontAwesomeIcon icon={faBookmark} className='iconesf'/>
            </div>
         </div>

        </div>
      </div>
    </main>
    <RodapeFeedGuardaRoupa/>
      </>
      
    );
  }
  
  export default Feed;