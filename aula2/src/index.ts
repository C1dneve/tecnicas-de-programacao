import Boleto from "./boleto";
import Cartao from "./cartao";

let boleto = new Boleto() // Instanciando a classe Boleto
let cartao = new Cartao()

console.log(`Pagamento a vista boleto: ${boleto.fazerPagamento(1000)}`)
console.log(`Pagamento a vista cartão: ${cartao.fazerPagamento(1000)}`) // Exibindo o resultado do pagamento a vista com cartão
console.log(`Pagamento parcelado cartão: ${cartao.fazerPagamentoParcelado(1000, 3)}`) // Exibindo o resultado do pagamento parcelado com cartão