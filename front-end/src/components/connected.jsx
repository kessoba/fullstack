import React from 'react';
import FormContainer from './formContainer';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import axios from "axios"

const Connected = () => {
  const [value,setValue]=useState({
    email:"",
    password:""
  })


  const handleSubmit = async (event)=>{
    event.preventDefault()
    try{
      const {data} = await axios.post("http://localhost:6000/inscription",{
        ...value,
      });
    }catch (err) {
      console.log(err )

    }
  };
  const inputs = [
    { type: 'email', placeholder: 'E-mail', onchange:(e) => setValue( [...value, e.target.value])},
    { type: 'password', placeholder: 'Mot de passe',onchange:(e) => setValue( [...value, e.target.value]) },
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
    <div>
    <FormContainer
      title="Connectez-vous en tant que Admin"
      inputs={enhancedInputs}
      actionText="Se Connecter"
      actionLink="/Dashboard"
      forgotPasswordLink="/MotDePasse"
      forgotPasswordText="Mot de passe oublié?"
      accountText="Vous n'avez pas de compte?"
      accountLink="/Dashboard"
      accountLinkText="Inscrivez-vous"
      
    />
     <ToastContainer/>
    </div>
  );
};

export default Connected;
