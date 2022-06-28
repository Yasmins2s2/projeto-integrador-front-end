enum TipoPeca {
    Sobreposicao = 'SOBREPOSICAO',
    ParteCima = 'PARTE_CIMA',
    ParteBaixo = 'PARTE_BAIXO',
}

type Peca = {
    id_peca:number
    nome:string
    url_imagem: string
    tipo: TipoPeca
}

export default Peca;
export {
    TipoPeca
};