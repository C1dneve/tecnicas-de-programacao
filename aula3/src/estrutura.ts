// list<T> lista = new ArrayLista<>() sendo o tipo t ferente a cada instanciação da classe, ou seja, quando instanciamos a classe Estrutura, podemos definir o tipo de dado que será armazenado na lista, por exemplo: Estrutura<number> lista = new Estrutura<number>() ou Estrutura<string> lista = new Estrutura<string>()

// export default class Estrutura<T,X> feito para trabalhar com dois tipos de dados diferentes, mas não é o caso aqui, pois estamos trabalhando com apenas um tipo de dado, que é o tipo T, que é definido na hora de instanciar a classe
// public lista: X[] = []

// polimorfismo é a capacidade de um objeto se comportar de diferentes formas, ou seja, um objeto pode ser de diferentes tipos, mas mantendo a tipagem forte, ou seja, não podemos adicionar um objeto de um tipo diferente do tipo que foi definido na hora de instanciar a classe.
// tipo polimorfismo parametrizado é quando um objeto pode ser de diferentes tipos, mas mantendo a tipagem forte, ou seja, não podemos adicionar um objeto de um tipo diferente do tipo que foi definido na hora de instanciar a classe.

export default class Estrutura<T> // t é == a type generics, que é um recurso do typescript que permite criar classes, interfaces e funções que podem trabalhar com diferentes tipos de dados, mantendo a tipagem forte
{
    // public Lista: any = [] // guarda qualquer tipo de objeto, mas não é recomendado usar any, pois perde-se a tipagem
    //public Lista: number[] = [] // guarda objetos do tipo number somente
    public lista: T[] = [] // guarda objetos do tipo T, que é definido na hora de instanciar a classe
}