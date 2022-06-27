import "./GuardaRoupa.css";
import { faSquarePlus,faHeart} from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuardaRoupa = function() {
    return ( 
        <>   
         <footer className="container">
        <div className="icones">
            <a href="" className="l1"><FontAwesomeIcon icon={faSquarePlus} />Publicar</a>
            <a href="" className="l2"><FontAwesomeIcon icon={faHeart} />Notificações</a>
            <a href="" className="l3"><FontAwesomeIcon icon={faLocationArrow} />Chat</a>
        </div>
     </footer>
     <main className="btn">
        <button className="Embaralhar">Embaralhar</button>
     </main>
        </>
 
     
    );
  }
  
  export default GuardaRoupa;