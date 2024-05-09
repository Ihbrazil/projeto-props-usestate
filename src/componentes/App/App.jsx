import estilo from '../App/App.module.css';
import { useState } from "react";
import CardAnimal from '../CardAnimal/CardAnimal';
import CardInformacoes from '../CardInformacoes/CardInformacoes';
import Topo from '../Topo/Topo.jsx';

export default function App() {
  
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    tipoDoComponenteCard === "cachorro" ? setTipoDoComponenteCard("gato") : setTipoDoComponenteCard("cachorro");
}

  return (
    <div className="estilo.App">
      <Topo clickAlterarAnimal={alterarState} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}