import estiloCardAnimal from '../CardAnimal/CardAnimal.module.css';
import estilo from '../../styles/Home.module.css';


export default function CardAnimal(props) {
  const ImagemCachorro = "/assets/cachorro.jpg";
  const ImagemGato = "/assets/gato.jpg";
  return (
    <div className={estilo.Card}>
      <div className={estiloCardAnimal.CardAnimal}>
        <img src={props.tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" />
      </div>
    </div>
  );
}