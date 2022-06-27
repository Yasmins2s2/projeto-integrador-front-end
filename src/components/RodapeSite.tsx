import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                        <p>Fomos criados por programadores iniciantes, que além de amarem a tecnologia, tambem amam a moda. "Nosso intuito foi criar um site que ajuda pessoas com ideias e criações de looks e, assim, mostrar que não existe certo e errado no moda". Visamos muito a diversidade entre nosso usuarios, sendo assim, pensamos em tudo para deixa-los o mais satisfeito possivel. </p>
                    
                        <div className="social">
                            <a href="https://www.instagram.com/appfel.appfel/"> <FontAwesomeIcon className="link1" icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100082877972025sk=about_work_and_education"> <FontAwesomeIcon className="link2" icon={faFacebook} /></a>
                            <a href="https://twitter.com/home"> <FontAwesomeIcon className="link3" icon={faTwitter} /></a>
                            <a href="https://www.linkedin.com/feed/"> <FontAwesomeIcon className="link4" icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
                <div className="center-box">
                    <h2>E-mail</h2>
                    <div className="content">
                        <div className="email">
                        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"> <FontAwesomeIcon icon={faEnvelope} /> appfel2022@mail.com</a>
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