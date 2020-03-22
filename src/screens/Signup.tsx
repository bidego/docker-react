import React from 'react';
import { Container, ButtonGroup, Form, FormControl, FormLabel } from 'react-bootstrap';
import { BtnConfirm } from '../components'
import { TiUser, TiPen } from 'react-icons/ti';

const Signup = (props:any) => {    
    return (
        <Container className="Signup-content">
            <section className="Signup-block">
                <TiUser size={48} /> <TiPen size={48} /> <h2>Registrate</h2>
            </section>
            <section className="Signup-form">
                <h3>
                    Ingresá un nombre de usuario y contraseña
                </h3>
                <Form>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl
                        type="text" placeholder="Usuario"/>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl  
                        type="password"
                        placeholder="Contraseña" />
                    <FormLabel>Confirma contraseña</FormLabel>
                    <FormControl  
                        type="re-password"
                        placeholder="Confirma contraseña" />
                    <ButtonGroup size="lg" className="mt-3 pull-right">
                        <BtnConfirm className="pull-right">Reset</BtnConfirm>
                        <BtnConfirm className="ml-3 pull-right">Confirmar</BtnConfirm>
                    </ButtonGroup>
                </Form>
            </section>
        </Container>    )    
}

export default Signup;