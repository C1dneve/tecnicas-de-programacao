import Pessoa from "./pessoa";
import Medico from "./medico";
import Enfermeiro from "./enfermeiro";

const informacoes = (Pessoa: Pessoa) => // This function takes a Pessoa object as a parameter and logs its details to the console.
{
    console.log(`Nome: ${Pessoa.getNome()}, CPF: ${Pessoa.getCpf()}`); 
    //polimorfismo: o método getNome() e getCpf() são chamados de forma polimórfica, ou seja, o mesmo método pode ter comportamentos diferentes dependendo do objeto que o chama (Medico ou Enfermeiro).

    if (Pessoa instanceof Medico) // This checks if the object is an instance of the Medico class.
    {
        console.log(`CRM: ${Pessoa.getCrm()}`); // If it is a Medico, it logs the CRM.
    }
    else if (Pessoa instanceof Enfermeiro) // This checks if the object is an instance of the Enfermeiro class.
    {
        console.log(`CRE: ${Pessoa.getCre()}`); // If it is an Enfermeiro, it logs the CRE.
    }
}

//let ps = new Pessoa("Massanori", "9125444"); 
// This line will cause an error because 'Pessoa' is an abstract class and cannot be instantiated directly. You can only create instances of classes that extend 'Pessoa', such as 'Medico' or 'Enfermeiro'.

// ps.cpf = "abacate"; // This line will cause an error because 'cpf' is private and cannot be accessed outside the class.
//ps.setNome("João"); // This will work because 'setNome' is a public method that can be accessed outside the class.

// console.log(ps.nome); // This will work because 'nome' is public and can be accessed outside the class.
// console.log(ps.cpf); // This line will also cause an error because 'cpf' is private and cannot be accessed outside the class.

// console.log(ps.getNome()); // This will work because 'getNome' is a public method that can be accessed outside the class.
// console.log(ps.getCpf()); // This will work because 'getCpf' is a public method that can be accessed outside the class.


let md = new Medico("Dr. Leite", "123456789", "12345");
let enf = new Enfermeiro("Enf. Silva", "987654321", "54321");

console.log(md.getNome()); // This will work because 'getNome' is inherited from the Pessoa class and is public.
console.log(md.getCpf()); // This will work because 'getCpf' is inherited from the Pessoa class and is public.
console.log(md.getCrm()); // This will work because 'getCrm' is a public method of the Medico class.

console.log(enf.getNome()); // This will work because 'getNome' is inherited from the Pessoa class and is public.
console.log(enf.getCpf()); // This will work because 'getCpf' is inherited from the Pessoa class and is public.
console.log(enf.getCre()); // This will work because 'getCre' is a public method of the Enfermeiro class.

// console.log(md.detalhes()); // This will work because 'detalhes' is a public method of the Medico class that returns a string with the details of the doctor.
informacoes(md); // This will work because 'informacoes' is a function that takes a Medico object as a parameter and logs its details to the console.
informacoes(enf); // This will work because 'informacoes' is a function that takes a Enfermeiro object as a parameter and logs its details to the console.