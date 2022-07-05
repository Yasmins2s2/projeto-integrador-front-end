import { Link } from "react-router-dom";
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
          <div>
              <FontAwesomeIcon icon={faHeart} />
              <p className='texto-header'>
                <Link to="/notificações" className="btn-header">Notificações</Link>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faSquarePlus} />
              <p className='texto-header'>
                <Link to="/postar" className="btn-header">Postar</Link>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationArrow} />
              <p className='texto-header'>
                <Link to="/mensagens" className="btn-header">Mensagens</Link>
              </p>
            </div>
            
          </div>
       </header>
    </>
             
    )
};

export default CabecalhoFGR;
 /* c    display: flex;
    align-items: center;
    justify-content: center; */