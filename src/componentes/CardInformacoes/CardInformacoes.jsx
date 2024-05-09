import estiloCardInformacoes from '../CardInformacoes/CardInformacoes.module.css'; 
import estilo from '../../styles/Home.module.css'

export default function CardInformacoes(props) {
    let nomeAnimalCachorro = "Cachorro";
    let nomeAnimalGato = "Gato";
    let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
    let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";
    
    return (
      <div className={estilo.Card}>
        <div className={estiloCardInformacoes.CardInformacao}>
          <h3>Informação sobre o {props.tipoAnimal === "cachorro" ? nomeAnimalCachorro : nomeAnimalGato}</h3>
          <p>{props.tipoAnimal === "cachorro" ? informacaoCachorro : informacaoGato}</p>
        </div>
      </div>
  );
}