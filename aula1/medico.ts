import Pessoa from "./pessoa";

export default class Medico extends Pessoa //herda de Pessoa
{
    private crm: string;
    
    constructor(nome: string, cpf: string, crm: string)
    {
        super(nome, cpf); //chama o construtor da classe pai (Pessoa) e passa o nome e o CPF
        this.crm = crm;
    }

    detalhes()
    {
        return `Nome: ${this.getNome()}, CRM: ${this.getCrm()}, CPF: ${this.getCpf()}` // assim funciona porque getNome() e getCrm() são métodos públicos da classe Pessoa e Medico, respectivamente
        //return `Nome: ${this.nome}, CRM: ${this.crm}` // assim não funciona porque nome é privado na classe Pessoa e crm é privado na classe Medico
        // mas se o atributo nome fosse protegido (protected) na classe Pessoa, então a segunda linha funcionaria, porque a classe Medico poderia acessar o atributo nome da classe Pessoa.
    }

    getCrm(){return this.crm}
    setCrm(crm: string){this.crm = crm}
}