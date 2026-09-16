import { Component } from 'react';

type propriedade = {
    mensagem: string;
}

class Componente extends Component<propriedade> // essa classe é um componente de classe, que é uma forma de criar componentes no React usando classes do JavaScript. Ela estende a classe Component do React, o que significa que ela herda todas as funcionalidades de um componente React.
{
    constructor(props: propriedade) // o construtor é um método especial que é chamado quando uma instância da classe é criada. Ele recebe as propriedades do componente como argumento e chama o construtor da classe pai (Component) usando super(props).
    {
        super(props) // isso é necessário para que o componente tenha acesso às propriedades passadas para ele.
    }

    render()
    {
        return (
            <>
                <div>Chat lenda</div>
                <div>Mensagem: {this.props.mensagem}</div> 
                {/* // isso é uma forma de acessar as propriedades passadas para o componente. No caso, estamos acessando a propriedade 'mensagem' e exibindo seu valor dentro de um elemento. */}
            </>
        )
    }
}



export default Componente