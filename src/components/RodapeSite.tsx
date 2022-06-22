import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "./Rodape.css"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const RodapeSite = function(){
    return (
        <footer>
            <div className="main-content">
                <div className="left-box">
                    <h2>Sobre nós</h2>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere dolor ea eveniet, obcaecati velit rem natus numquam enim minus asperiores placeat officiis modi repellendus incidunt nulla commodi hic? Ut?</p>
                    
                        <div className="social">
                            <a href=""> <FontAwesomeIcon className="link1" icon={faInstagram} /> </a>
                            <a href=""> <FontAwesomeIcon className="link2" icon={faFacebook} /></a>
                            <a href=""> <FontAwesomeIcon className="link3" icon={faTwitter} /></a>
                            <a href=""> <FontAwesomeIcon className="link4" icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
                <div className="center-box">
                    <h2>E-mail</h2>
                    <div className="content">
                        <div className="email">
                        <a href=""> <FontAwesomeIcon icon={faEnvelope} />  appfelmodel@gmail.com </a>
                        </div>
                    </div>
                </div>
                <div className="rigth-box">
                    <h2>Contato</h2>
                    <div className="content">
                        <form action="#">
                            <div className="email">
                                <div className="text">Email *</div>
                                <input type="email" required />
                            </div>
                            <div className="msg">
                                <div className="text">Mensagem *</div>
                                <textarea name="" id=""  required></textarea>
                            </div>
                            <div className="btn">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
};
export default RodapeSite;