import estiloTopo from '../Topo/Topo.module.css';

export default function Topo(props) {
    return (
        <header className={estiloTopo.cabecalho}>
            <h1>Projeto Props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={props.clickAlterarAnimal} className={estiloTopo.botao}>Mudar Animal</button>
        </header>
    )
}