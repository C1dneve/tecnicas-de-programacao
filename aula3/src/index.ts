import Comida from "./comida";
import Estrutura from "./estrutura";

let estrutura = new Estrutura<Comida>(); // instanciando a classe Estrutura com o tipo Comida, ou seja, a lista vai armazenar objetos do tipo Comida

let cm = new Comida;

cm.nome = "lasanha";
cm.sabor = 9;

let cm1 = new Comida;
cm1.nome = "parmegiana";
cm1.sabor = 10;

estrutura.lista.push(cm); // adicionando o objeto cm na lista da classe Estrutura
//estrutura.lista.push("") // adicionando uma string na lista da classe Estrutura, mas isso não é permitido, pois a lista foi instanciada com o tipo Comida, pque a classe Estrutura é uma classe generics, ou seja, ela pode trabalhar com diferentes tipos de dados, mas mantendo a tipagem forte, ou seja, não podemos adicionar um objeto de um tipo diferente do tipo que foi definido na hora de instanciar a classe.'
estrutura.lista.push(cm1); // adicionando o objeto cm1 na lista da classe Estrutura

estrutura.lista.forEach((item) => {
    console.log(`Nome: ${item.nome} - Nível: ${item.sabor}`);
});