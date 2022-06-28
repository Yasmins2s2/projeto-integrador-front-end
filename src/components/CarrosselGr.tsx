// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarrosselGr.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import  img1 from "../imagens/c3.webp";
import calca2 from "../imagens/calça2.png";
import calca3 from "../imagens/calça3.png";
import calca4 from "../imagens/calça4.png"


const CarrosselGr = function() {
    return(
        <>  
        <div className="main-guardaroupa" >
        <div className="carrossel-left">
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
                                                    <span className="nome">Calca Jeans/ Azul Claro</span>
                                                </div>
                                                <div className="button">
                                                    <button className="btn-escolher">ESCOLHER</button>
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
                                                    <img src={calca2} alt="" />
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
                                                    <button className="btn-ESCOLHER">ESCOLHER</button>
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
                                                    <img src={calca3} alt="" />
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
                                                    <button className="btn-ESCOLHER">ESCOLHER</button>
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
                                                    <img src={calca4} alt="" />
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
                                                    <button className="btn-ESCOLHER">ESCOLHER</button>
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
                                                    <button className="btn-escolher">ESCOLHER</button>
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
                                                    <button className="btn-escolher">ESCOLHER</button>
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
                                                    <button className="btn-escolher">ESCOLHER</button>
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
                                                    <button className="btn-escolher">ESCOLHER</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
        <div className="textoborda">
            <h2>Seu look sugerido foi:</h2>
        </div>
        <div className="carrossel-right">
            <div className="Borda-look">

                <img src={calca3} alt="" />

            </div>
        </div>
        </div>
        </>
 
     
    );
  }
  
  export default CarrosselGr;