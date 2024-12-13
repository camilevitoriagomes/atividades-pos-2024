import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Se você tiver um arquivo de estilo CSS
import App from './App'; // Importando o componente principal App
import reportWebVitals from './reportWebVitals'; // Para monitoramento de desempenho (opcional)

const root = ReactDOM.createRoot(document.getElementById('root')); // Encontrando o elemento de root no HTML

root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente principal App */}
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho na sua aplicação, passe uma função para reportWebVitals
// Por exemplo: reportWebVitals(console.log);
