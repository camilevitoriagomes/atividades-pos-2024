import React, { useEffect, useState } from 'react';
import { fetchAlbuns } from '../services/apiWrapper';

const AlbunsList = () => {
  const [albuns, setAlbuns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Carregar álbuns assim que o componente for montado
    const loadAlbuns = async () => {
      try {
        const data = await fetchAlbuns();
        setAlbuns(data);
      } catch (err) {
        setError('Erro ao carregar os álbuns');
      } finally {
        setLoading(false);
      }
    };

    loadAlbuns();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Álbuns</h2>
      <ul>
        {albuns.map((album) => (
          <li key={album.id}>
            <h3>{album.nome}</h3>
            <p>Ano: {album.ano}</p>
            <p>Artista: {album.artista.nome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbunsList;
