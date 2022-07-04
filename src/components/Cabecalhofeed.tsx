import './Cabecalhofeed.css';
import './CabecalhoFGR' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';


const Cabecalho = function() {
    return (
      <>
       <header className='CabecalhoFeed'> 
          <div className='Logo'>
            <h1>AppFell</h1>
          </div>
          <div className='icones'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faSquarePlus} />
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
       </header>
      
      </>
    );
  }
  
  export default Cabecalho;
  /* <img src={imagem1} alt="" />*/