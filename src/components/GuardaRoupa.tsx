import './GuardaRoupa.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faComment, faBookmark} from '@fortawesome/free-regular-svg-icons';
//import {faLocationArrow, faHouseChimney, faMagnifyingGlass, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import CarrosselGr from "./CarrosselGr";
import imagem1 from "../imagens/roupa.jpg"
import { useState, useEffect } from 'react';
import Peca, { TipoPeca } from '../models/Peca';
import PecasService from '../services/Pecas';
import CabecalhoFGR from './CabecalhoFGR';
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';

const GuardaRoupa = function() {

    const [pecasCadastradas, setPecasCadastradas] = useState<Peca[]>([]);
    const [pecasSelecionadas, setPecasSelecionadas] = useState<Peca[]>([]);

    const carrosselAlterado = function(peca: Peca) {
        const pecasFiltradas = pecasSelecionadas.filter(function (pecaSelecionada) { return pecaSelecionada.tipo !== peca.tipo });
        setPecasSelecionadas([...pecasFiltradas, peca]);
    };

    useEffect(function () {
        PecasService.lerTodas(function (pecas) {
            setPecasCadastradas(pecas);
        });
    }, []);

    useEffect(function () {
        console.log(pecasSelecionadas);
    }, [pecasSelecionadas]);
    
    return(   
            <>
                    <CabecalhoFGR/>
               
                <div className='main-guardaroupa'>
                    <section className='left-guardaroupa'>
                        <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.ParteCima})} onChange={carrosselAlterado} />
                        <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.ParteBaixo})}  onChange={carrosselAlterado} />
                        <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.Sobreposicao})}  onChange={carrosselAlterado} />
                    </section>
                    <section className='rigth-guardaroupa'>
                        <h3 className='texto-rigth'>Seu look sugerido foi:</h3>
                        <br/>

                        <div className='pecas-selecionadas'>
                            {pecasSelecionadas.map(function (peca) {
                                return ( 
                                    <img className='pecas-selecionadas_peca' src={peca.url_imagem} />
                                )
                            })}
                        </div>

                        
                    </section>
                </div>
               
                
                   <RodapeFeedGuardaRoupa/>
                
            </>
     );
}

export default GuardaRoupa;