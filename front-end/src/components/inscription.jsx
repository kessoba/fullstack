
import FormContainer from './formContainer';
import Logo from "../assets/images/logo.png";
import { ToastContainer } from 'react-toastify';

const Inscription = () => {
  const inputs = [
    { type: 'text', placeholder: 'Nom' },
    { type: 'text', placeholder: 'E-mail',},
    { type: 'password', placeholder: 'Mot de passe' },
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


  return (
    <div>
    <FormContainer 
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
