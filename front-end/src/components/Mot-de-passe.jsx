import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

export default function MotDePasse() {
  return (
   
    <main class="mx-auto flex gap-4 flex-col h-screen w-full items-center justify-center bg-connect ">
         <div className='flex gap-4'>
            <div className=''>
            <img src={Logo} alt="" className='w-10'  />
            </div>
         <h2 className='text-2xl font-bold text-white  whitespace-nowrap text-opacity-50'>RED PRODUCT</h2>
         </div>
        
    <section class="flex w-[25rem] shadow rounded p-8 flex-col gap-12 border bg-white">
        <div class="text-start text-black text-xl">Mot de passe oublié?</div>
        <p class="text-start text-black ">Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.</p>
        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-500">
            <input type="text" placeholder=" Votre e-mail" className="w-full border-none bg-transparent outline-none  focus:outline-none"/>
        </div>
        <button class="transform rounded text-white text-opacity-50 bg-gray-700 text-xl py-3 font-bold duration-300 hover:bg-gray-500">Envoyer</button>

    </section>
    <div className='space-y-4 mt-6'> 
    <p class="text-center text-white text-opacity-50 text-lg">
    Revenir à la 
    <Link to="/" className="font-medium text-yellow-500 underline-offset-4 hover:underline">Connexion</Link>
    </p>
    </div>
</main>
  )
}
