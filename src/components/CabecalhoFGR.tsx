import './CabecalhoFGR.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSquarePlus, faUser, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
const CabecalhoFGR = function() {
    return (
    <>
        <header className='cabecalhoguardaroupa'>
            <main className='CabecalhoguardaroupaFrom'>
              
                <div className='TextInicio'>
                    <h1>AppFel</h1>
                </div>
           
                <div className='iconesfgt'>
                     <div>
                         <i className='iconegr1'><FontAwesomeIcon icon={faHeart} /></i>
                    </div>
                    <div> 
                        <i className='iconegr2'><FontAwesomeIcon icon={faComment} /></i>
                    </div>
                    <div>
                         <i className='iconegr3'><FontAwesomeIcon icon={faBookmark} /></i>
                    </div>
                </div>
            
             </main>
        </header>
    </>
             
    )
}

export default CabecalhoFGR;