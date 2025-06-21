function Personagem_dados({ personagem }){
    const tradutor = {
        'Alive' : 'Vivo',
        'Human' : 'Humano',
        'unknown' : 'Desconhecido',
        'Dead' : 'Morto',
        'Humanoid' : 'Humanoide',
        'Mythological Creature': 'Criatura Mitológica',
        'Robot' : 'Robô',
        'Disease' : 'Doença',
        'Alien' : 'Alienígena',
        'Poopybutthole' : 'Poopybutthole',
        'Cronenberg' : 'Cronenberg'
    }
    return(
        <div style={{
            border: '1px solid #ccc',
            padding: 10,
            width: 200,
            textAlign: 'center',
            borderRadius: 8,
            background: '#f4f4f4',
            color: "black"
        }}>
            <img src={personagem.image} alt={personagem.name} style={{ width: '100%', borderRadius: 8 }} />
            <h3>{personagem.name}</h3>
            <p>Status: {tradutor[personagem.status]}</p>
            <p>Espécie: {tradutor[personagem.species]}</p>
        </div>
    );
}
export default Personagem_dados