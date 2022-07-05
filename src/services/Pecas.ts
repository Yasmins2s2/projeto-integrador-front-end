import Peca, { TipoPeca } from "../models/Peca";


const pecas = [
    {
        id_peca: 1,
        nome: 'Camisa Branca',
        url_imagem: '/content/imagens/Camisabranca.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 2,
        nome: 'Camisa Branca Listrada',
        url_imagem: '/content/imagens/CamisaListrada.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 3,
        nome: 'Sueter Branco',
        url_imagem: '/content/imagens/SueterBranco.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 4,
        nome: 'Camiseta Azul',
        url_imagem: '/content/imagens/CamisetaAzul.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 5,
        nome: 'Camiseta Colorida Simpsons',
        url_imagem: '/content/imagens/CamisetaColoridaSimpsons.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 6,
        nome: 'Camiseta Nike Azul',
        url_imagem: '/content/imagens/CamisetaNikeAzul.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 7,
        nome: 'Camiseta Nike Preta',
        url_imagem: '/content/imagens/CamisetaNikePreta.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 8,
        nome: 'Camiseta Branca Japa',
        url_imagem: '/content/imagens/CamisetaBrancaJapa.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 9,
        nome: 'Camiseta Rosa Nike',
        url_imagem: '/content/imagens/CamisetaRosaNike.png',
        tipo: TipoPeca.ParteCima,
    },
    {
        id_peca: 10,
        nome: 'Shorts Jeans/ Azul Escuro',
        url_imagem: '/content/imagens/ShortsJeans.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 11,
        nome: 'Calca Jeans',
        url_imagem: '/content/imagens/CalcaJeans.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 12,
        nome: 'Calca Jeans Branca',
        url_imagem: '/content/imagens/CalcaJeansBranca.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 13,
        nome: 'Calca Moletom',
        url_imagem: '/content/imagens/CalcaMoletom.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 14,
        nome: 'Shorts Preto',
        url_imagem: '/content/imagens/ShortsPreto.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 15,
        nome: 'Shorts Roxo',
        url_imagem: '/content/imagens/ShortsRoxo.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 16,
        nome: 'Shorts Jeans/ Azul Escuro',
        url_imagem: '/content/imagens/ShortsJeans.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 17,
        nome: 'Calça Bege',
        url_imagem: '/content/imagens/carlca_large_bege.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 18,
        nome: 'Shorts Florido',
        url_imagem: '/content/imagens/ShortsFlorido.png',
        tipo: TipoPeca.ParteBaixo,
    },
    {
        id_peca: 19,
        nome: 'Tênis Preto',
        url_imagem: '/content/imagens/TenisPreto.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 20,
        nome: 'Tênis Vans',
        url_imagem: '/content/imagens/TenisVans.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 21,
        nome: 'Tênis Niike Marrom',
        url_imagem: '/content/imagens/TenisNikeMarrom.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 22,
        nome: 'Tênis Preto',
        url_imagem: '/content/imagens/ChineloHavaianas.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 23,
        nome: 'Tênis Nike Cinza',
        url_imagem: '/content/imagens/TenisNikeCinza.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 24,
        nome: 'Tênis Cinza',
        url_imagem: '/content/imagens/TenisCinza.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 15,
        nome: 'Sapatenis Preto',
        url_imagem: '/content/imagens/SapatenisPreto.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 26,
        nome: 'Tênis Azul',
        url_imagem: '/content/imagens/TenisAzul.png',
        tipo: TipoPeca.Calcado,
    },
    {
        id_peca: 27,
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