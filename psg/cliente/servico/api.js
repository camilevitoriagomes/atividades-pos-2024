// api.js
const apiUrl = 'http://localhost:8000/'; // URL do backend

const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${apiUrl}${endpoint}/`);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error('Erro ao acessar API: ' + error.message);
  }
};

export const getArtistas = () => fetchFromApi('artistas');
export const getAlbuns = () => fetchFromApi('albuns');
export const getMusicas = () => fetchFromApi('musicas');
