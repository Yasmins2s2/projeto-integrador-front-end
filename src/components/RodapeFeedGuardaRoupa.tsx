import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faHouseChimney, faMagnifyingGlass, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import './RodapeFeedGuardaRoupa.css'

const RodapeFeedGuardaRoupa = function() {
  return (
    <>
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
export default RodapeFeedGuardaRoupa;