import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TiGroup } from 'react-icons/ti';
import { Container, Button, Col, Row } from 'react-bootstrap';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="App">
      <Navigator />
      <header className="App-header">
        <TiGroup size={96} />
        <h1>Educacion Digital</h1>
      	<p>
	        El patio de intercambio de conocimientos
        </p>
        <a
          className="App-link"
          href="https://google.com?q=Educacion+Digital"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrá
        </a>
      </header>
    </div>
  );
}

export default App;
