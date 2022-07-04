import Peca, { TipoPeca } from "../models/Peca";


const pecas = [
    {
        id_peca: 1,
        nome: 'Camiseta branca1',
        url_imagem: '../imagens/img1.jpg',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 2,
        nome: 'Camiseta branca2',
        url_imagem: '/content/imagens/camiseta_fem_rosa.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 3,
        nome: 'Sueter Branco',
        url_imagem: '/content/imagens/SueterBranco.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 3,
        nome: 'Shorts Jeans/ Azul Escuro',
        url_imagem: '/content/imagens/ShortsJeans.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 4,
        nome: 'Calca2',
        url_imagem: '/content/imagens/carlca_large_bege.png',
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
        nome: 'Tênis Preto',
        url_imagem: '/content/imagens/TenisPreto.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 7,
        nome: 'Tênis Vans',
        url_imagem: '/content/imagens/TenisVans.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 8,
        nome: 'Tênis Niike Marrom',
        url_imagem: '/content/imagens/TenisNikeMarrom.png',
        tipo: TipoPeca.Calcado,
    },
];

const PecasService = {
    lerTodas: function (callback: (pecas: Peca[]) => void) {
        //TODO conexão com o servidor
        callback(pecas);
    },
};

export default PecasService;