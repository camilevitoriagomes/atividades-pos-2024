// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchArtistas, fetchAlbuns, fetchMusicas } from './services/apiWrapper';

const App = () => {
  const [artistas, setArtistas] = useState([]);
  const [albuns, setAlbuns] = useState([]);
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funções para carregar os dados de artistas, álbuns e músicas
  useEffect(() => {
    const loadData = async () => {
      try {
        const artistasData = await fetchArtistas();
        const albunsData = await fetchAlbuns();
        const musicasData = await fetchMusicas();

        setArtistas(artistasData);
        setAlbuns(albunsData);
        setMusicas(musicasData);
      } catch (err) {
        setError('Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // O array vazio significa que o efeito rodará apenas uma vez

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Artistas, Álbuns e Músicas</h1>

      <div>
        <h2>Artistas</h2>
        <ul>
          {artistas.map((artista) => (
            <li key={artista.id}>
              <h3>{artista.nome}</h3>
            </li>
          ))}
        </ul>
      </div>

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
    </div>
  );
};

export default App;
