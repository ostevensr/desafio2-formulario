import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alert from '../Alert/Alert.jsx';

import { useState } from 'react';


function BasicExample() {

  const [nombre, setNombre] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [password2, setPassword2] = useState("")

  const [error, setError] = useState(false)

  function validarCorreoElectronico(correo) {
 
    var expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (expresionRegular.test(correo)) {
      return false;
    } else {
      return true;
    }
  }

  function validacionInputs(e) {
    e.preventDefault()

    if (nombre === '' || email === '' || password === '' || password2 === '') {
      let alerta = "Completar todos los datos requeridos"
      console.log(alerta)
      setError(true)
    } else if (password != password2) {
      let alerta = "Ambas contraseñas deben ser iguales"
      console.log(alerta)
      setError(true)
    } else if (validarCorreoElectronico(email)) {
      let alerta = "Formato de email incorrecto"
      console.log(alerta)
      setError(true)
    } else {
      setError(false);
      setNombre("");
      setEmail("");
      setPassword("");
      setPassword2("")
    }

  }

  return (
    <>
    <Form onSubmit={validacionInputs}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="Nombre" type="text" placeholder="Nombre" onChange={(nombre) => setNombre(nombre.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="Email" type="email" placeholder="tuemail@ejemplo.com" onChange={(email) => setEmail(email.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="password" type="password" placeholder="Contraseña" onChange={(password) => setPassword(password.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control name="password2" type="password" placeholder="Confirma tu contraseña" onChange={(password2) => setPassword2(password2.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>

    </Form>

    </>
  );
}

export default BasicExample;