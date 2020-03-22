import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { TiMortarBoard } from 'react-icons/ti';
import { Btn } from '../components';

const Courses = (props:any) => {
    return(
        <header className="App-header">
            <TiMortarBoard size={48} />
            <h1>Cursos</h1>
            <p>
                El patio de intercambio de conocimientos
            </p>
            <a
                className="App-link"
                href="https://google.com?q=Educacion+Digital"
                target="_blank"
                rel="noopener noreferrer"
                hidden
            >Entrá</a>
            <Form inline>
            <FormControl type="text" placeholder="¿Que desea buscar?" className="mr-sm-2" />
            <Btn variant="outline-success">Buscar</Btn>
            </Form>
          </header>
    )
}

export default Courses;