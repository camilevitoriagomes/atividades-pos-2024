import { getArtistas } from '../services/apiWrapper';

const ArtistasList = () => {
  const [artistas, setArtistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadArtistas() {
      try {
        const data = await getArtistas();
        setArtistas(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar artistas');
        setLoading(false);
      }
    }

    loadArtistas();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Artistas</h1>
      <ul>
        {artistas.map((artista) => (
          <li key={artista.id}>{artista.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistasList;
