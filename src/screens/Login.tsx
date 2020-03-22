import React from 'react';
import { Container, Form, FormControl, FormLabel, ButtonGroup } from 'react-bootstrap';
import { BtnConfirm } from '../components'
import { TiKeyOutline } from 'react-icons/ti';

const Login = (props:any) => {    
    return (
        <Container className="Login-content">
            <section className="Login-block">
                <TiKeyOutline size={48} /> <h2>Ingresar</h2>
            </section>
            <section className="Login-form">
                <h3>
                    Ingresá tu usuario y contraseña
                </h3>
                <Form>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl
                        type="text" placeholder="Usuario"/>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl  
                        type="password"
                        placeholder="Contraseña" />
                    <ButtonGroup size="lg" className="mt-3 pull-right">
                        <BtnConfirm className="pull-right">Reset</BtnConfirm>
                        <BtnConfirm className="ml-3 pull-right">Confirmar</BtnConfirm>
                    </ButtonGroup>
                </Form>
            </section>
        </Container>
    )    
}

export default Login;