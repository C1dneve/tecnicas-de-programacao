import { StrictMode } from 'react' // isso é uma forma de garantir que o código está sendo executado em um ambiente seguro e que está seguindo as melhores práticas do React.
import { createRoot } from 'react-dom/client' // já isso é uma forma de criar a raiz do aplicativo React, que é onde o aplicativo será renderizado no DOM.
import './index.css'
import App from './App.tsx' // só importar o arquivo App.tsx, que é o componente principal do aplicativo.
import Componente from './Components.tsx'
import Classe from './Classe.tsx'
import Botao from './Botao.tsx'


createRoot(document.getElementById('root')!).render( //isso faz a renderização do aplicativo React no elemento com o id 'root' no DOM. O ponto de exclamação é usado para garantir que o elemento existe e não é nulo.
  <StrictMode>
    <App />
    <Componente nome="Cid" />  
    {/* isso é um componente funcional que recebe uma propriedade chamada 'nome' com o valor 'Cid'. */}
    <Classe mensagem="Olá, mundo!" />
    <Botao />
  </StrictMode>,
)
