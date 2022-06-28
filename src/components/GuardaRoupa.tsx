// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GuardaRoupa.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import  img1 from "../imagens/c3.webp";
import img2 from "../imagens/img2.jpg";
import img3 from "../imagens/img3.jpg";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const GuardaRoupa = function() {
    return(
        <>
        <div className="painel-swipers">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swipper-sobreposicao"
            >
                <SwiperSlide>
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
                                            <span className="nome">Calca1</span>
                                        </div>
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
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
                                            <span className="nome">Calca FIM</span>
                                        </div>
                                        <div className="button">
                                            <button className="btn-escolher">Escolher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
        
           
        </>
 
     
    );
  }
  
  export default GuardaRoupa;