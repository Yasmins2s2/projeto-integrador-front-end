// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarrosselGr.css";
import Peca, { TipoPeca } from '../models/Peca';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useState } from "react";

type Props = {
    pecas: Peca[]
    onChange?: (peca: Peca) => void
};

const CarrosselGr = function(props: Props) {

    const [pecaAtiva, setPecaAtiva] = useState<Peca>();

    return(
        <>  
        
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
                            {props.pecas.map(function (peca) {
                                return (
                                    <SwiperSlide key={peca.id_peca} className={(pecaAtiva === peca) ? 'ativa' : ''}>
                                        <section>
                                            <div className="container">
                                                <div className="content">
                                                    <button
                                                        className="card"
                                                        onClick={ function () {
                                                            setPecaAtiva(peca);
                                                            if (props.onChange) {
                                                                props.onChange(peca)
                                                            }
                                                        }}
                                                    >
                                                        <div className="card-content">
                                                            <div className="image">
                                                                <img src={peca.url_imagem} alt="" />
                                                            </div>
                                                            <div className="media-icons">
                                                                <i className="store"> <FontAwesomeIcon icon={faStore} /></i>
                                                            </div>
                                                            <div className="NomeModelo" title={peca.nome}>
                                                                <span className="nome">{peca.nome}</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                    </SwiperSlide>
                                );
                            })
                            }
                        </Swiper>
                    </div>
            </div>
        </>
    );
  }
  
  export default CarrosselGr;