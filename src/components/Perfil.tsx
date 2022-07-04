import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import './Perfil.css'
import './CarrosselGr.css'
import ImagemPerfil from "../imagens/MeninaDeCostas.jpg"
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';
const Perfil = function(){
    return(
        <>
               <section>
                    <div className="container">
                        <div className="content">
                            <div className="card-content">
                                <div className="image">
                                    <img src={ImagemPerfil} alt="" />
                                </div>
                                <div className="media-icons">
                                    <i className="store"> <FontAwesomeIcon icon={faCamera} /></i>
                                </div>                              
                            </div>                          
                        </div>
                    </div>
                </section>
                <div className='editarPerfil'>
                    <button>Editar Perfil</button>
                </div>
                <div className='InformacoesPerfil'>
                    <div className='NomeUsuario'>
                        <h3>AppFel</h3>
                    </div>
                    <div className='SobreNos'>
                        <h3>Biografia</h3>
                    </div>
                    <div className='localização'>
                      <h3> Localização: São Carlos, SP</h3>  
                    </div>
                    <div className='dataDeNascimento'>
                      <h3> 29/09/2003</h3>  
                    </div>
                </div>
                <div className='Publicacoes'>
                    <div className='Foto'>
                        <img src={ImagemPerfil} alt="" />
                        <img src={ImagemPerfil} alt="" />
                        <img src={ImagemPerfil} alt="" />
                    </div>
                    <div className='Foto'>
                        <img src={ImagemPerfil} alt="" />
                        <img src={ImagemPerfil} alt="" />
                        <img src={ImagemPerfil} alt="" />
                    </div>
                </div>
                <RodapeFeedGuardaRoupa/>
        </>
    )
};
export default Perfil;