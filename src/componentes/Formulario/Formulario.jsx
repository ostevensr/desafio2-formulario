import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from '../Alert/Alert.jsx';

import { useState } from 'react';

function Formulario() {
  //ORLANDO QUE LOS INPUTS SE MANEJEN A TRAVES UN OBJETO, ESCRIBE POR ACA SI NECESITAS ALGO.
  const [nombre, setNombre] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [password2, setPassword2] = useState('');

  const [alert, setAlert] = useState({
    texto: '',
    color: '',
    estado: false,
  });

  function validarCorreoElectronico(correo) {
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (expresionRegular.test(correo)) {
      return false;
    } else {
      return true;
    }
  }

  function validacionInputs(e) {
    e.preventDefault();

    if (nombre === '' || email === '' || password === '' || password2 === '') {
      setAlert({
        texto: 'Completar todos los campos!',
        color: 'alert-danger',
        estado: true,
      });
    } else if (password != password2) {
      setAlert({
        texto: 'Ambas contraseñas deben ser iguales!',
        color: 'alert-danger',
        estado: true,
      });
    } else if (validarCorreoElectronico(email)) {
      setAlert({
        texto: 'Formato de email incorrecto!',
        color: 'alert-danger',
        estado: true,
      });
    } else {
      setNombre('');
      setEmail('');
      setPassword('');
      setPassword2('');
      setAlert({
        texto: 'Registro creado Exitosamente!',
        color: 'alert-success',
        estado: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={validacionInputs}>
        <Form.Group className="mb-3">
          <Form.Control
            name="Nombre"
            type="text"
            placeholder="Nombre"
            onChange={(nombre) => setNombre(nombre.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="Email"
            type="email"
            placeholder="tuemail@ejemplo.com"
            onChange={(email) => setEmail(email.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(password) => setPassword(password.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            name="password2"
            type="password"
            placeholder="Confirma tu contraseña"
            onChange={(password2) => setPassword2(password2.target.value)}
          />
        </Form.Group>

        <Button variant="success w-100" type="submit">
          Registrarse
        </Button>
      </Form>

      <Alert alerta={alert} />
    </>
  );
}

export default Formulario;
