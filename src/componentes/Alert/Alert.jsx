import React from 'react';
import './alert.css';

export default function Alert({ alerta }) {
  const { texto, tipo, estado } = alerta;

  return (
    <div className={`alert ${estado ? tipo : 'display-none'} mt-1`}>
      {texto}
    </div>
  );
}
