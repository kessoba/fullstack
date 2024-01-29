import React, { useState } from 'react';
import FormContainer from './formContainer';
import { ToastContainer } from 'react-toastify';
import { message } from 'antd';
import AuthServices from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage } from './getErrorMessage';

const Connected = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputs = [
    { type: 'email', placeholder: 'E-mail', value:email, onChange: (e) => setEmail(e.target.value) },
    { type: 'password', placeholder: 'Mot de passe', value: password, onChange: (e) => setPassword(e.target.value) },
  ];

  const commonProperties = {
    checkboxLabel: 'Garder moi Connecter',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email,
        password
      };
      setLoading(true);
      const response = await AuthServices.loginUser(data);
      console.log(response);
      localStorage.setItem('users', JSON.stringify(response));
      message.success("Logged in Successfully");
      navigate('/dashboard');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      message.error(getErrorMessage(error));
    }
  }

  return (
    <div>
      <FormContainer  
        loading={loading}
        onSubmit={handleSubmit}
        title="Connectez-vous en tant que Admin"
        inputs={enhancedInputs}
        actionText="Se Connecter"
        actionLink="/dashboard"
        forgotPasswordLink="/MotDePasse"
        forgotPasswordText="Mot de passe oublié?"
        accountText="Vous n'avez pas de compte?"
        accountLink="/dashboard"
        accountLinkText="Inscrivez-vous"
        includeCheckbox={true}
      />
      <ToastContainer/>
    </div>
  );
};

export default Connected;
