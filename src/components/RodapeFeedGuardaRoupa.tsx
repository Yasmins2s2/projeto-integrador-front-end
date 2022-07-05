import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faHouseChimney, faMagnifyingGlass, faShirt} from '@fortawesome/free-solid-svg-icons';
import './RodapeFeedGuardaRoupa.css'

const RodapeFeedGuardaRoupa = function() {
  return (
    <>
    <footer className="RodapeFeedGuarda-Roupa">
         <div className='icones3'>
            <div>
              <FontAwesomeIcon icon={faHouseChimney} />
              <p className='text-footer'>
                <Link to="/feed" className="btn-rodape">Feed</Link>
              </p> 
            </div>

            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p className='text-footer'>
                <Link to="/buscar" className="btn-rodape">Buscar</Link>
              </p>
            </div>
            
            <div>
              <FontAwesomeIcon icon={faShirt} /> 
              <p className='text-footer'>
                <Link to="/GuardaRoupa" className="btn-rodape">Guarda-Roupa</Link>
              </p> 
            </div>

            <div>
              <FontAwesomeIcon icon={faUser} />
                <p className='text-footer'>
                  <Link to="/Perfil" className="btn-rodape">Perfil</Link>
                </p>
            </div>
             
          </div>
    </footer>
    </>
  );
}
export default RodapeFeedGuardaRoupa;