import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import FormContainer from './formContainer';

export default function MotDePasse() {

  const inputs = [
    { type: 'text', placeholder: 'E-mail' },
  ];
  const commonProperties = {
   additionalText:'Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.',
  accountText: 'Revenir à la',   
  accountLink: '/',  
  accountLinkText: 'Connexion',
  };

  const enhancedInputs = inputs.map((input) => ({
    ...input,
    ...commonProperties,
  }));
  return (
       <FormContainer
      title="Mot de passe oublié?"
      inputs={enhancedInputs}
      actionText="Envoyer"
      actionLink="/"
      
    />

  )
}
