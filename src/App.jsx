import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './componentes/Registro/Registro.jsx'
import './App.css'

import Alert from './componentes/Alert/Alert.jsx';

import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert (newAlert)
  }

  return (
    <>

      <Registro onAlert = {addAlert} />
      <Alert alerta={alert} />

    </>
  )
}

export default App
