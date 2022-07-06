import './GuardaRoupa.css'
import CarrosselGr from "./CarrosselGr";
import { useState, useEffect } from 'react';
import Peca, { TipoPeca } from '../models/Peca';
import PecasService from '../services/Pecas';
import CabecalhoFGR from './CabecalhoFGR';
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';

const GuardaRoupa = function () {

    const [pecasCadastradas, setPecasCadastradas] = useState<Peca[]>([]);
    const [pecasSelecionadas, setPecasSelecionadas] = useState<Peca[]>([]);

    const carrosselAlterado = function (novaPeca: Peca) {
        // remove da lista de peças já selecionadas, todas as peças do mesmo tipo da nova peça e adiciona a nova peça
        let pecasFiltradas = pecasSelecionadas.filter(function (pecaSelecionada) { return pecaSelecionada.tipo !== novaPeca.tipo });
        pecasFiltradas = [...pecasFiltradas, novaPeca];

        // ordena lista por tipo de peça
        const pecasOrdenadas = [
            ...pecasFiltradas.filter(function (pecaFiltrada) { return pecaFiltrada.tipo === TipoPeca.ParteCima }),
            ...pecasFiltradas.filter(function (pecaFiltrada) { return pecaFiltrada.tipo === TipoPeca.ParteBaixo }),
            ...pecasFiltradas.filter(function (pecaFiltrada) { return pecaFiltrada.tipo === TipoPeca.Calcado })
        ]

        // atualiza lista de peças selecionadas, já filtrada e ordenada
        setPecasSelecionadas(pecasOrdenadas);
    };

    useEffect(function () {
        PecasService.lerTodas(function (pecas) {
            setPecasCadastradas(pecas);
        });
    }, []);

    return (
        <>
            <CabecalhoFGR />

            <div className='main-guardaroupa'>
                <section className='left-guardaroupa'>
                    <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.ParteCima })} onChange={carrosselAlterado} />
                    <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.ParteBaixo })} onChange={carrosselAlterado} />
                    <CarrosselGr pecas={pecasCadastradas.filter(function (peca) { return peca.tipo === TipoPeca.Calcado })} onChange={carrosselAlterado} />
                </section>
                <section className='rigth-guardaroupa'>
                    {
                        pecasSelecionadas.length > 0 &&
                        <div>
                            <h3>Seu look escolhido foi:</h3>
                            <br />

                            <div className='pecas-selecionadas'>
                                {pecasSelecionadas.map(function (peca) {
                                    return (
                                        <img key={peca.id_peca} className='pecas-selecionadas_peca' src={peca.url_imagem} />
                                    )
                                })}
                            </div>
                        </div>

                    }
                    {
                        pecasSelecionadas.length === 0 &&
                        <div>
                            <h3>Selecione peças para montar seu look</h3>
                            <br />
                        </div>

                    }
                </section>
            </div>


            <RodapeFeedGuardaRoupa />

        </>
    );
}

export default GuardaRoupa;