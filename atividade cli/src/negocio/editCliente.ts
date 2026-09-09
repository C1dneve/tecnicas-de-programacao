import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Edit from "./edit";

export default class EditCliente extends Edit {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public edit(): void {
        console.log(`\nInício da edição do cliente`);

        const cpf = this.entrada.receberTexto(
            `Por favor informe o número do CPF do cliente para edição: `
        )

        const cliente = this.clientes.find(
            cliente => cliente.getCpf().getValor() === cpf
        )

        if (cliente === undefined) {
            console.log(`\nCliente não encontrado.\n`)
            return
        }

        const nome = this.entrada.receberTexto(
            `Por favor informe o novo nome do cliente: `
        )

        const nomeSocial = this.entrada.receberTexto(
            `Por favor informe o novo nome social do cliente: `
        )

        cliente.setNome(nome)
        cliente.nomeSocial(nomeSocial)

        console.log(`\nEdição concluída :)\n`);
    }
}