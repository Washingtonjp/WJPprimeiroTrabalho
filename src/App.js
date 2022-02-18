import './App.css';
import Testando from './components/Primeiro';
import Banana , {OffCanvas , OffCanvas1} from './components/Testando';
import {Magica , Magica1 , Magica2 } from './components/estiloss/Estilos'
import MinMax  from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
function App() {
  return (
<div> washington
<Testando />
<OffCanvas/>
<OffCanvas1/>
<Banana/>
<Magica/> 
<Magica1 label = "compra"/> 
<Magica2 label = "venda"/>
<MinMax  min ="5"  max= "10"/>
<MinMax  min ={5}  max= {10}/>
<Titulo principal = "ola" secundario = "ola tudo bem"/>
<Botao />
</div>
  );
}

export default App;
