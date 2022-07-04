import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faHouseChimney, faMagnifyingGlass, faShirt} from '@fortawesome/free-solid-svg-icons';
import './RodapeFeedGuardaRoupa.css'

const RodapeFeedGuardaRoupa = function() {
  return (
    <>
    <footer>
         <div className='icones3'>
            <FontAwesomeIcon icon={faHouseChimney} /> <p className='text-footer'><Link to="/feed" className="btn-rodape">Feed</Link></p> 
            <FontAwesomeIcon icon={faMagnifyingGlass} /><p className='text-footer'> Buscar</p> 
            <FontAwesomeIcon icon={faShirt} /> <p className='text-footer'><Link to="/GuardaRoupa" className="btn-rodape">Guarda-Roupa</Link></p> 
            <FontAwesomeIcon icon={faUser} /><p className='text-footer'>Perfil</p> 
          </div>
       </footer>
    </>
  );
}
export default RodapeFeedGuardaRoupa;