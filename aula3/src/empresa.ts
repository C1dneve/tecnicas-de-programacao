export default class Empresa 
{
    private razaoSocial!: string = "";
    private cnpj!: string = ""
    private nomeFantasia!: string = "";//para não precisar inicializar a variável com um valor, podemos usar o operador !, que indica que a variável será inicializada posteriormente, ou seja, não é necessário inicializar a variável com um valor, mas é necessário inicializar a variável antes de usá-la, caso contrário, teremos um erro de compilação.

    //constructor sobrecarregado, ou seja, podemos ter mais de um construtor na mesma classe, mas com assinaturas diferentes, ou seja, com parâmetros diferentes, mas não é o caso aqui, pois estamos trabalhando com apenas um construtor, que é o construtor padrão, que é chamado quando instanciamos a classe sem passar nenhum parâmetro.

    constructor(razaoSocial: string, cnpj: string, nomeFantasia: string)
    constructor(razaoSocial: string, cnpj: string)
    constructor()
    constructor(razaoSocial?: string, cnpj?: string, nomeFantasia?: string)
    {
        if( razaoSocial !== undefined && cnpj !== undefined && nomeFantasia !== undefined )
        {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
            this.nomeFantasia = nomeFantasia;
        }
        if( razaoSocial !== undefined && cnpj !== undefined && nomeFantasia === undefined )
        {
            this.razaoSocial = razaoSocial;
            this.cnpj = cnpj;
        }
    }
    
}