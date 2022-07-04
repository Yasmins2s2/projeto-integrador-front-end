import './CabecalhoFGR.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles, faBookBookmark} from '@fortawesome/free-solid-svg-icons';
const CabecalhoFGR = function() {
    return (
    <>
      <header className='CabecalhoFeed'> 
          <div className='Logo'>
            <h1>AppFell</h1>
          </div>
          <div className='icones'>
            <FontAwesomeIcon icon={faHeart} /> <p className='text-header'> Notificações</p>
            <FontAwesomeIcon icon={faSquarePlus} /> <p className='text-header'>Postar</p> 
            <FontAwesomeIcon icon={faLocationArrow} /><p className='text-header'>Mensagens</p> 
          </div>
       </header>
    </>
             
    )
};

export default CabecalhoFGR;
 /* c    display: flex;
    align-items: center;
    justify-content: center; */