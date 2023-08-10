import React from 'react';
import SocialButton from './SocialButton';

export default function Registro() {
  return (
    <>
      <h1 className="text-dark mb-3">Crea una cuenta</h1>
      <SocialButton button_1={'fa-facebook'} button_2={'fa-github'} button_3={'fa-linkedin'} />
      <p className="text-dark mt-3">O usa tu email para registrarte.</p>
    </>
  );
}
