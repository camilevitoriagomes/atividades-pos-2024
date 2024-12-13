import React, { useEffect, useState } from 'react';
import { fetchMusicas } from '../services/apiWrapper';

const MusicasList = () => {
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Carregar músicas assim que o componente for montado
    const loadMusicas = async () => {
      try {
        const data = await fetchMusicas();
        setMusicas(data);
      } catch (err) {
        setError('Erro ao carregar as músicas');
      } finally {
        setLoading(false);
      }
    };

    loadMusicas();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Músicas</h2>
      <ul>
        {musicas.map((musica) => (
          <li key={musica.id}>
            <h3>{musica.nome}</h3>
            <p>Álbum: {musica.album.nome}</p>
            <p>Duração: {musica.segundos} segundos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicasList;
