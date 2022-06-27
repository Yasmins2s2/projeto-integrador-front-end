import "./GuardaRoupa.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import  img1 from "../imagens/c3.webp";
import img2 from "../imagens/img2.jpg";
import img3 from "../imagens/img3.jpg";
import { faStore } from "@fortawesome/free-solid-svg-icons";
const GuardaRoupa = function(){
    return(
        <>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="card">
                            <div className="card-content">
                                <div className="image">
                                    <img src={img1} alt="" />
                                </div>
                                 
                                <div className="media-icons">
                                   <i> <FontAwesomeIcon icon={faStore} /></i>
                                    <i> <FontAwesomeIcon icon={faFacebook} /></i>
                                    <i><FontAwesomeIcon icon={faTwitter} /></i>
                                </div>
                                <div className="NomeModelo">
                                    <span className="nome">Calca</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>
        </>
 
     
    );
  }
  
  export default GuardaRoupa;