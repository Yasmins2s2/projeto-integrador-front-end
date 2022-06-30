import Peca, { TipoPeca } from "../models/Peca";

const pecas = [
    {
        id_peca: 1,
        nome: 'Camiseta branca1',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 2,
        nome: 'Camiseta branca2',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 3,
        nome: 'Camiseta branca3',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 3,
        nome: 'Calca Jeans/ Azul Claro',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 4,
        nome: 'Calca2',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 5,
        nome: 'Calca3',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 6,
        nome: 'Casaquinho vermelh1o',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.Sobreposicao,
    },
    {
        id_peca: 7,
        nome: 'Casaquinho vermelho2',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.Sobreposicao,
    },
    {
        id_peca: 8,
        nome: 'Casaquinho vermelho3',
        url_imagem: '/content/calca2.png',
        tipo: TipoPeca.Sobreposicao,
    },
];

const PecasService = {
    lerTodas: function (callback: (pecas: Peca[]) => void) {
        //TODO conexão com o servidor
        callback(pecas);
    },
};

export default PecasService;