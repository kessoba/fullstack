import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

export default function Connected() {
  return (
   
    <main class="mx-auto flex gap-3 flex-col h-screen w-full items-center justify-center bg-connect  " style={{backgroundColor :' #494C4F'}}>
         <div className='flex gap-4'>
            <div className=''>
            <img src={Logo} alt="" className='w-10'  />
            </div>
         <h2 className='text-2xl font-bold text-white  whitespace-nowrap text-opacity-50'>RED PRODUCT</h2>
         </div>
        
    <section class="flex w-[25rem] shadow rounded p-8 flex-col gap-14 border bg-white">
        <div class="text-center text-black text-2xl font">Connectez-vous en tant que Admin</div>
        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-500">
            <input type="text" placeholder="E-mail" className="w-full border-none bg-transparent outline-none  focus:outline-none"/>
        </div>
        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-500">
            <input type="password" placeholder="Mot de passe" class="w-full border-none bg-transparent outline-none  focus:outline-none"/>
        </div>
            <div className='text-black text-xl'> 
            <div className="flex items-center h-5 gap-2 ">
        <input id="hs-list-group-item-checkbox-2" name="hs-list-group-item-checkbox-2" type="checkbox" className="border-gray-200 rounded disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 w-6 h-6"/>
        Gardez-moi Connecter
      </div>
        </div>
        <Link className="transform rounded bg-gray-600 text-xl py-3 font-bold duration-300 hover:bg-gray-500 text-opacity-50  text-white" to="/Dashboard">
        Se Connecter
        </Link>
    </section>
    <div className='space-y-4 mt-6'> 
    <Link to="/MotDePasse" className="transform  text-center font-bold text-yellow-500 duration-300 hover:text-white">Mot de passe oublié?</Link>

    <p class="text-center text-lg text-opacity-50 text-white">
    Vous n'avez pas de compte?
    <Link to="/inscription" class="font-medium text-yellow-500 underline-offset-4 hover:underline">Incrivez-vous</Link>
    </p>
    </div>
</main>
  )
}
