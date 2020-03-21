import React from 'react';
import './App.css';

import { TiGroup } from 'react-icons/ti';
import { Form, FormControl } from 'react-bootstrap';
import Navigator from './components/Navigator';
import Btn from './components/Btn';

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
          hidden
        >
          Entrá
        </a>
        <Form inline>
          <FormControl type="text" placeholder="¿Que desea buscar?" className="mr-sm-2" />
          <Btn variant="outline-success">Buscar</Btn>
        </Form>

      </header>
    </div>
  );
}

export default App;
