export default interface Parcelavel{// Interface que define o contrato para objetos que podem ser parcelados
    fazerPagamentoParcelado(valor: number, parcelas: number): string;
}