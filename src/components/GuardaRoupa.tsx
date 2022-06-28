import './GuardaRoupa.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import CarrosselGr from "./CarrosselGr";
import imagem1 from "../imagens/roupa.jpg"

const GuardaRoupa = function() {
    return(   
            <>
                <div>
                    <header>
                        <h1>Cabeçalho Guarda-Roupa</h1>
                        <div className='iconesgr'>
                        <i className='iconegr1'><FontAwesomeIcon icon={faHeart} /></i>
                        <i className='iconegr2'><FontAwesomeIcon icon={faComment} /></i>
                        <i className='iconegr3'><FontAwesomeIcon icon={faBookmark} /></i>
                        </div>
                         
                    </header>
                </div>
                <div className='main-guardaroupa'>
                    <div className='left-guardaroupa'>
                        <CarrosselGr></CarrosselGr>
                        <CarrosselGr></CarrosselGr>
                        <CarrosselGr></CarrosselGr>
                    </div>
                    <div className="rigth-guardaroupa">
                        <div className="card-imagem">
                            <img src={imagem1} alt="" />
                        </div>
                       <h3 className='texto-rigth'>Seu look sugerido foi:</h3> 
                    </div>
                </div>
               
                <div>
                    <footer>
                        fim
                    </footer>
                </div>
            </>
     );
}

export default GuardaRoupa;