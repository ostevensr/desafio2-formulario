import React from 'react';
import './alert.css'

export default function Alert({ alerta }) {
  const { texto, color, estado } = alerta;

  return (
    <div className={`alert ${estado ? color : 'display-none'} mt-1`}>
      {texto}
    </div>
  );
}
