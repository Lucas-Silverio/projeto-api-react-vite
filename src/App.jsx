//Importações 
import { useState, useEffect } from 'react'
import Personagem_dados from './Componentes/Personagem_dados'
import './App.css'

// Estados e constantes
function App() {
  const [personagens, setPersonagens] = useState([]);
  const [paginaApi, setPaginaApi] = useState(1);
  const [grupo, setGrupo] = useState(0)

  const personagens_por_grupo = 5;

  useEffect(() => {
    const buscar_Personagens = async () =>{
      try {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${paginaApi}`);
        const data = await resposta.json();
        setPersonagens(data.results);
        setGrupo(0);
      } catch (error) {
        console.error('Erro ao buscar personagens na API', error)
      }
    };

    buscar_Personagens();

  },[paginaApi]);

  //Calculo de paginação
  const inicio = grupo * personagens_por_grupo;
  const fim = inicio + personagens_por_grupo;
  const grupo_atual = personagens.slice(inicio,fim);

  //Navegação
  const proximoGrupo = () => {
    if((grupo + 1) * personagens_por_grupo < personagens.length){
      setGrupo(grupo + 1)
    }
  };
  const grupoAnterior = () => {
    if(grupo > 0){
      setGrupo(grupo - 1);
    }
  };
  const proximaPagina = () => {
    setPaginaApi(paginaApi + 1)
  };
  const paginaAnterior = () => {
    if(paginaApi > 1){
      setPaginaApi(paginaApi - 1);
    }
  };

  return (
    <div style={{padding: 20}}>
      <h1>Personagens (Página {paginaApi}, Grupo {grupo + 1})</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20}}>
        {grupo_atual.map(personagem => (
          <Personagem_dados key={personagem.id} personagem={personagem} />
        ))}
      </div>
      <div style={{ marginTop: 20}}>
        <button onClick={grupoAnterior} disabled={grupo === 0 } >Grupo Anterior</button>
        <button onClick={proximoGrupo} disabled={(grupo + 1) * personagens_por_grupo >= personagens.length } >Próximo Grupo</button>
      </div>
      <div style={{ marginTop: 20}}>
        <button onClick={paginaAnterior} disabled={paginaApi === 1}>Página Anterior</button>
        <button onClick={proximaPagina}>Próxima Página</button>
      </div>
    </div>
  )
}

export default App
