import { useEffect, useState } from "react";
import Peca, { TipoPeca } from "./models/Peca";
import PecasService from "./services/Pecas";

const CadsatroGuardaRoupa = function () {

    const [pecas, setPecas] = useState<Peca[]>([]);

    useEffect(function () {
        PecasService.lerTodas(function (pecas) {
            setPecas(pecas);
        });
    }, []);

    return (
        <>
            <ul className="OpcoesPecasSobreposicao">
                {pecas.filter(function (peca) {
                    return peca.tipo === TipoPeca.Sobreposicao
                })
                .map(function (peca) {
                    return <li key={peca.id_peca}>{peca.id_peca} - {peca.nome}</li>
                })}
            </ul>
            <ul className="OpcoesPecasParteCima">
            {pecas.filter(function (peca) {
                    return peca.tipo === TipoPeca.ParteCima
                })
                .map(function (peca) {
                    return <li key={peca.id_peca}>{peca.id_peca} - {peca.nome}</li>
                })}
            </ul>
            <ul className="OpcoesPecasParteBaixo">
            {pecas.filter(function (peca) {
                    return peca.tipo === TipoPeca.ParteBaixo
                })
                .map(function (peca) {
                    return <li key={peca.id_peca}>{peca.id_peca} - {peca.nome}</li>
                })}
            </ul>
        </>
    );
};

export default CadsatroGuardaRoupa;