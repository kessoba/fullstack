import React from 'react';
import FormContainer from './formContainer';
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Inscription = () => {
  const inputs = [
    { type: 'text', placeholder: 'Nom' },
    { type: 'text', placeholder: 'E-mail' },
    { type: 'password', placeholder: 'Mot de passe' },
  ];

  const commonProperties = {
    checkboxLabel: 'Accepter les termes et la politique',
    accountText: 'Vous avez déja un  compte?',
    accountLink: '/',
    accountLinkText: 'Connectez-vous',
  };
  const enhancedInputs = inputs.map((input) => ({
    ...input,
    ...commonProperties,
  }));

  return (
    <FormContainer
      title="Inscrivez-vous en tant que Admin"
      inputs={enhancedInputs}
      actionText="S'inscrire"
      actionLink="/"
      
    />
  );
};

export default Inscription;
