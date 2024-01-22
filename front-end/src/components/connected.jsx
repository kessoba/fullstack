import React from 'react';
import FormContainer from './formContainer';

const Connected = () => {
  const inputs = [
    { type: 'text', placeholder: 'E-mail' },
    { type: 'password', placeholder: 'Mot de passe' },
  ];
const commonProperties = {
    checkboxLabel: 'Accepter les termes et la politique',
  forgotPasswordLink: '/MotDePasse',
    forgotPasswordText: 'Mot de passe oublié?',
    accountText: 'Vous n\'avez pas de compte?',
    accountLink: '/inscription',
    accountLinkText: 'Inscrivez-vous',
  };
  const enhancedInputs = inputs.map((input) => ({
    ...input,
    ...commonProperties,
  }));

  return (
    <FormContainer
      title="Connectez-vous en tant que Admin"
      inputs={enhancedInputs}
      actionText="Se Connecter"
      actionLink="/Dashboard"
      forgotPasswordLink="/MotDePasse"
      forgotPasswordText="Mot de passe oublié?"
      accountText="Vous n'avez pas de compte?"
      accountLink="/inscription"
      accountLinkText="Inscrivez-vous"
    />
  );
};

export default Connected;
