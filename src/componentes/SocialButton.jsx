import React from 'react'
import { Button } from 'react-bootstrap'

export default function SocialButton() {
  return (
    <>
    <Button variant="outline-dark rounded-circle p-2 mx-2"><i className="fa-brands fa-facebook fa-xl"></i></Button>
    <Button variant="outline-dark rounded-circle p-2 mx-2"><i className="fa-brands fa-github fa-xl"></i></Button>
    <Button variant="outline-dark rounded-circle p-2 mx-2"><i className="fa-brands fa-linkedin fa-xl"></i></Button>
    </>
  )
}
