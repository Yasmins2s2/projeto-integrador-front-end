import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const RodapeSite = function(){
    return (
        <footer>
            <div className="rodape-content">
                <div className="left-box">
                    <h2>Sobre nós</h2>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere dolor ea eveniet, obcaecati velit rem natus numquam enim minus asperiores placeat officiis modi repellendus incidunt nulla commodi hic? Ut?</p>
                    </div>
                    <div className="social">
                        <a href=""> <FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                        <a href=""> <FontAwesomeIcon icon={faFacebook} />Facebook</a>
                        <a href=""> <FontAwesomeIcon icon={faTwitter} />Twiteer</a>
                        <a href=""> <FontAwesomeIcon icon={faLinkedin} />Linkedin</a>

                    </div>

                </div>
            </div>
        </footer>
    );
};
export default RodapeSite;