import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


const FormContainer = ({onSubmit, title, inputs, actionText, actionLink ,additionalText,includeCheckbox  }) => {

  const handleInputChange = (fieldName, e) => {
    const updatedValue = e.target.value;
    console.log(`Champ ${fieldName} mis à jour avec la valeur : ${updatedValue}`);

    if (inputs.find(input => input.type === fieldName && input.onChange)) {
      inputs.find(input => input.type === fieldName && input.onChange)(updatedValue);
    }
  };
  return (
    <main className="mx-auto   flex gap-4 flex-col h-screen w-full items-center justify-center bg-connect">
      <div className="flex gap-4">
        <div className="">
          <img src={Logo} alt="" className="w-10" />
        </div>
        <h2 className="text-2xl font-bold text-white whitespace-nowrap text-opacity-50">RED PRODUCT</h2>
      </div>
      <form  className="flex w-[25rem] shadow rounded p-8 flex-col gap-14 border bg-white">
        <div className="text-center text-black text-2xl font">{title}</div>
        {additionalText && <p className="text-start text-black ">{additionalText}</p>}  
        {inputs.map((input, index) => (
          <div key={index} className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-500">
            <input type={input.type}  placeholder={input.placeholder}  onChange={(e) => handleInputChange(input.type, e)}  className="w-full border-none bg-transparent outline-none focus:outline-none" />
          </div>
        ))}
        {includeCheckbox && (
          <div className="text-black text-xl">
            <div className="flex items-center h-5 gap-2">
              <input
                id="hs-list-group-item-checkbox-2"
                name="hs-list-group-item-checkbox-2"
                type="checkbox"
                className="border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 w-6 h-6"
              />
              {inputs[0].checkboxLabel}
            </div>
          </div>
        )}

        <button type='submit' className="transform rounded bg-gray-600 text-xl py-3 font-bold duration-300 hover:bg-gray-500 text-white text-opacity-50">
          {actionText}
        </button>
      </form>
      <div className="space-y-4 mt-6">
        {inputs[0].forgotPasswordLink && (
          <Link to={inputs[0].forgotPasswordLink} className="transform text-center font-bold text-yellow-500 duration-300 hover:text-white">
            {inputs[0].forgotPasswordText}
          </Link>
        )}
        <p className="text-center text-lg text-opacity-50 text-white">
          {inputs[0].accountText} <Link to={inputs[0].accountLink} className="font-medium text-yellow-500 underline-offset-4 hover:underline">
            {inputs[0].accountLinkText}
          </Link>
        </p>
      </div>
    </main>
  );
};

export default FormContainer;
