import Pagamento from "./pagamento";

export default class Cartao extends Pagamento // extends Pagamento para herdar as funcionalidades de pagamento
{
    fazerPagamento(valor: number): string {
        return `Efetuando pagamento no valor: ${valor}`;
    }
    fazerPagamentoParcelado(valor: number, parcelas: number): string { 
        return `Efetuando pagamento parcelado no valor: ${valor / parcelas} em ${parcelas} parcelas`; // Implementação do método fazerPagamentoParcelado
    }
}