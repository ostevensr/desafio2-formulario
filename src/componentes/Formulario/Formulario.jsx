import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirma tu contraseña" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default BasicExample;