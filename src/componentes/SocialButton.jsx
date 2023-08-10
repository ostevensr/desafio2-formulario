import React from 'react';
import { Button } from 'react-bootstrap';

export default function SocialButton({button_1, button_2, button_3}) {
  return (
    <>
      <Button variant="outline-dark rounded-circle p-2 mx-2">
        <i className={`fa-brands ${button_1} fa-xl`}></i>
      </Button>
      <Button variant="outline-dark rounded-circle p-2 mx-2">
        <i className={`fa-brands ${button_2} fa-xl`}></i>
      </Button>
      <Button variant="outline-dark rounded-circle p-2 mx-2">
        <i className={`fa-brands ${button_3} fa-xl`}></i>
      </Button>
    </>
  );
}
