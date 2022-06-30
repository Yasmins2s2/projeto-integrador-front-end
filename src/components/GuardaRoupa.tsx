import './GuardaRoupa.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
//import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import CarrosselGr from "./CarrosselGr";
import imagem1 from "../imagens/roupa.jpg"
import { useState, useEffect } from 'react';
import Peca, { TipoPeca } from '../models/Peca';
import PecasService from '../services/Pecas';

const GuardaRoupa = function() {

    const [pecas, setPecas] = useState<Peca[]>([]);

    const carrosselAlterado = function(peca: Peca) {
        alert(peca.nome)
    };

    useEffect(function () {
        PecasService.lerTodas(function (pecas) {
            setPecas(pecas);
        });
    }, []);
    
    return(   
            <>
                <div>
                    <header>
                        <h1>Cabeçalho Guarda-Roupa</h1>
                        <div className='iconesgr'>
                        <i className='iconegr1'><FontAwesomeIcon icon={faHeart} /></i>
                        <i className='iconegr2'><FontAwesomeIcon icon={faComment} /></i>
                        <i className='iconegr3'><FontAwesomeIcon icon={faBookmark} /></i>
                        </div>
                         
                    </header>
                </div>
                <div className='main-guardaroupa'>
                    <div className='left-guardaroupa'>
                        <CarrosselGr pecas={pecas.filter(function (peca) { return peca.tipo === TipoPeca.ParteCima})} onChange={carrosselAlterado} />
                        <CarrosselGr pecas={pecas.filter(function (peca) { return peca.tipo === TipoPeca.ParteBaixo})}  onChange={carrosselAlterado} />
                        <CarrosselGr pecas={pecas.filter(function (peca) { return peca.tipo === TipoPeca.Sobreposicao})}  onChange={carrosselAlterado} />
                    </div>
                    <div className="rigth-guardaroupa">
                        <div className="card-imagem">
                            <img src={imagem1} alt="" />
                        </div>
                       <h3 className='texto-rigth'>Seu look sugerido foi:</h3> 
                    </div>
                </div>
               
                <div>
                    <footer>
                        fim
                    </footer>
                </div>
            </>
     );
}

export default GuardaRoupa;