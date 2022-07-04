import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import './Perfil.css'
import './CarrosselGr.css'
import ImagemPerfil from '../imagens/MeninaDeCostas.jpg'
import LogoAppfel from '../imagens/LogoAppfel.jpeg'
import PostIris from '../imagens/PostIris.jpg'
import Iris from '../imagens/Iris.png'
import modeloIris from '../imagens/modeloIris.png'
import single from '../imagens/single.jpeg'
import Appfel from '../imagens/Appfel.jpeg'
import filme from '../imagens/filme.png'
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';
const Perfil = function(){
    return(
        <>
               <section>
                    <div className="container">
                        <div className="content">
                            <div className="card-content">
                                <div className="image">
                                    < img src={LogoAppfel} alt="" /> 
                                    <i className="camera"> <FontAwesomeIcon icon={faCamera} /></i>
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
                        <h3>AppFel AppFel</h3>
                    </div>
                    <div className='SobreNos'>
                        <h3>Biografia:</h3> <h5>Amantes da moda, que admiram e eapreciam o trabalho da exceletissima Iria Apfel. Sendo assim, usamos seu nome como fonte de inspiração do nosso App.</h5>
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
                        <img src={modeloIris} alt="" />
                        <img src={PostIris} alt="" />
                        <img src={single} alt="" />
                    </div>
                    <div className='Foto'>
                        <img src={Iris} alt="" />
                        <img src={filme} alt="" />
                        <img src={Appfel} alt="" />
                    </div>
                </div>
                <RodapeFeedGuardaRoupa/>
        </>
    )
};
export default Perfil;