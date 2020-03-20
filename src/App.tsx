import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TiGroup } from 'react-icons/ti';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TiGroup size={82} />
        <h1>Educacion Digital</h1>
	<p>
	  El patio de intercambio de conocimientos mas grande do mondo
        </p>
        <a
          className="App-link"
          href="https://google.com?q=Educacion+Digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quienes somos?
        </a>
      </header>
    </div>
  );
}

export default App;
