import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from '../Alert/Alert.jsx';

import { useState } from 'react';

function Formulario() {

  const [input, setInput] = useState({
    nombre: "",
    email: "",
    password: "",
    password1: ""
  });

  function inputHandler(e) {
    if (e.target.id === "nombre") {
      setInput({ ...input, nombre: e.target.value });
    }

    if (e.target.id === "email") {
      setInput({ ...input, email: e.target.value });
    }

    if (e.target.id === "password") {
      setInput({ ...input, password: e.target.value });
    }
    if (e.target.id === "password1") {
      setInput({ ...input, password1: e.target.value });
    }
  }

  //console.log(input)

  const [alert, setAlert] = useState({
    texto: '',
    color: '',
    estado: false,
  });

  function validacionInputs(e) {
    e.preventDefault();

    function validarCorreoElectronico(c) {
      var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (expresionRegular.test(c)) {
        return false;
      } else {
        return true;
      }
    }

    if (input.nombre === '' || input.email === '' || input.password === '' || input.password1 === '') {
      setAlert({
        texto: 'Completar todos los campos!',
        color: 'alert-danger',
        estado: true,
      });
    } else if (input.password != input.password1) {
      setAlert({
        texto: 'Ambas contraseñas deben ser iguales!',
        color: 'alert-danger',
        estado: true,
      });
    } else if (validarCorreoElectronico(input.email)) {
      setAlert({
        texto: 'Formato de email incorrecto!',
        color: 'alert-danger',
        estado: true,
      });
    } else {
      setAlert({
        texto: 'Registro creado Exitosamente!',
        color: 'alert-success',
        estado: true,
      });
    }
  }

  //console.log(alert)

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control onChange={(e) => inputHandler(e)}
            id='nombre'
            name="Nombre"
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control onChange={(e) => inputHandler(e)}
            id='email'
            name="Email"
            type="email"
            placeholder="tuemail@ejemplo.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control onChange={(e) => inputHandler(e)}
            id='password'
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control onChange={(e) => inputHandler(e)}
            id='password1'
            name="password1"
            type="password"
            placeholder="Confirma tu contraseña"
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
