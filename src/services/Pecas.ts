import Peca, { TipoPeca } from "../models/Peca";

const pecas = [
    {
        id_peca: 1,
        nome: 'Casaquinho vermelho',
        url_imagem: '',
        tipo: TipoPeca.Sobreposicao,
    },
    {
        id_peca: 2,
        nome: 'Camiseta branca',
        url_imagem: '',
        tipo: TipoPeca.ParteCima,
    },
];

const PecasService = {
    lerTodas: function (callback: (pecas: Peca[]) => void) {
        //TODO conexão com o servidor
        callback(pecas);
    },
};

export default PecasService;