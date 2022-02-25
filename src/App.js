import './App.css';
import Testando from './components/Primeiro';
import Banana , {OffCanvas , OffCanvas1} from './components/Testando';
import {Magica , Magica1 , Magica2 } from './components/estiloss/Estilos'
import MinMax  from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador'
import Propiedades from './components/propiedades/Propriedades';
import Produto from './components/produtos/Produto';
import Carros from './components/carro/Carros';
import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
import Familia from './components/children/Familia';
import Menbro from './components/children/Menbro';
import ParImpar from './components/condicional/ParImpar';
import UsuarioLogado from './components/condicional/UsuarioLogado';
import ListaProdutos from './components/lista/ListaProdutos';
import DigiteSeuNome from './components/DigiteSeuNome';
import CadastroNome from './components/classe/CadastroNome';
function App() {
  return (
<div> 
{/* <h1> Carros da garagem do Washington</h1> */}
{/* <Testando />
<OffCanvas/>
<OffCanvas1/>
<Banana/>
<Magica/> 
<Magica1 label = "compra"/> 
<Magica2 label = "venda"/>
<MinMax  min ="5"  max= "10"/>
<MinMax  min ={5}  max= {10}/>
<Titulo principal = "ola" secundario = "ola tudo bem"/>
<Botao /> */}
{/* <Contador inicial ={10} passo ={10} limitemin = {0}  limitemax = {100}/>
<Contador inicial ={0} passo ={1} limitemin = {0}  limitemax = {10}/>
<Propiedades nome = "jonas" />
<Produto   nome ="teclado"  marca ="falsa"  preco ="10.99" />
<Produto   nome ="mesa"  marca ="medera madera"  preco ="2.000,00" azul />
<Produto   nome ="cadeira"  marca ="medera madera"  preco ="1.000,00"  verde /> */}
{/* < Carros  modelo = " fox "  marca = " hyunday" cor  = " preta"  ano = " 2022 "  porta = " 4 "  combustivel = " flex"  cambio = "manual"  aro = "13"  potencia = "400c"  preco = " 20.000,00 "  />
< Carros  modelo = " sandero "  marca = " hyundai" cor  = " prata "  ano = " 2012"  porta = " 4 "  combustivel = "flex"  cambio = "manual "  aro = "15"  potencia = "100c"  preco = " 21.000,00 "  />
< Carros  modelo = " meriva"  marca = " ford " cor  = " vermelha "  ano = "2016 "  porta = " 4"  combustivel = "gasolina"  cambio = "automatico"  aro = "14"  potencia = "80c"  preco = "15.000,00 "  />
< Carros  modelo = " ferrari 800 "  marca = " ferrari " cor  = " vermelha "  ano = " 2009"  porta = "4 "  combustivel = "gasolina"  cambio = "automatico"  aro = "14"  potencia = "2000c"  preco = " 2.000.000,00"  /> */}
{/* <Pai /> */}
{/* <Pai /> */}
{/* <Familia>
<Menbro nome = "jonas" sobrenome = "pereira" />
<Menbro nome = "maria" sobrenome = "pereira" />
<Menbro nome = "washington" sobrenome = "pereira" />
</Familia>
<Familia>
<Menbro nome = "maria" sobrenome = "carvalho" />
<Menbro nome = "joao" sobrenome = "carvalho" />
<Menbro nome = "flavia" sobrenome = "carvalho" />
</Familia> */}

{/* <ParImpar num = {2} />
<ParImpar num = {3} />
<ParImpar num = {0} /> */}
{/* <UsuarioLogado  usuario = {{nome: "washington " ,  email : "washington@hotmail.com"}}    />
<UsuarioLogado  /> */}
{/* <ListaProdutos  /> */}
{/* <DigiteSeuNome /> */}

<CadastroNome nome ="washington"/>
</div>
  );
}

export default App;
