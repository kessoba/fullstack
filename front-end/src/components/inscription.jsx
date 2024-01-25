
import FormContainer from './formContainer';
import Logo from "../assets/images/logo.png";
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';
import { getErrorMessage } from './getErrorMessage';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import { message } from 'antd';

const Inscription = () => {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputs = [
    { type: 'text', placeholder: 'Nom', value: Name, onChange: (e) => setName(e.target.value) },
    { type: 'email', placeholder: 'E-mail', value: email, onChange: (e) => setEmail(e.target.value) },
    { type: 'password', placeholder: 'Mot de passe', value: password, onChange: (e) => setPassword(e.target.value) },
  ];
  const inputChek=[
    {
      type:'checkbox'
    }
  ]
  console.log( "donnees input", inputs)

  const commonProperties = {
    checkboxLabel: 'Accepter les termes et la politique',
    accountText: 'Vous avez déja un  compte?',
    accountLink: '/',
    accountLinkText: 'Connectez-vous',
  };
  const enhancedInputs = inputs.map((input) => ({
    ...input,
    inputChek,
    ...commonProperties,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
let data= {
  Name,
  email,
  password
}
setLoading(false)
const response = await AuthServices.registerUser(data);
console.log(response)
setLoading(false)
message.success("You are registered Successfully");
navigate("/")
    }catch(err) {
      console.log(err)
      message.error(getErrorMessage(err))
      setLoading(false)

    }
  }
  return (
    <div>
    <FormContainer
      loading={loading} 
      onSubmit={handleSubmit}
      title="Inscrivez-vous en tant que Admin"
      inputs={enhancedInputs}
      actionText="S'inscrire"
      actionLink=""
      includeCheckbox={true}
      
    />
     <ToastContainer/>
    </div>
  );
};

export default Inscription;
