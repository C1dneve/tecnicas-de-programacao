export default abstract class Pessoa //abstract porque não queremos instanciar objetos da classe Pessoa, apenas de classes que herdam dela (como Medico e Enfermeiro)
{
    protected nome: string; // atributo 'nome' é protegido, ou seja, pode ser acessado dentro da classe e em classes que herdam dela
    protected cpf: string;

    constructor(nome: string, cpf: string)
    {
        this.nome = nome;
        this.cpf = cpf;
    }

    setNome(nome: string)
    {
        this.nome = nome;
    }

    public getNome()
    {
        return this.nome.toUpperCase();
    }

    public getCpf()
    {
        return this.cpf;
    }
}