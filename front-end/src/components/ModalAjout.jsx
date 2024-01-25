import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";


export default function ModalAjout({ isModalOpen, setModalOpen }) {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <button
         className="middle none center mr-4 rounded-lg border py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow  transition-all   active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleOpenModal}
      >
        + créer un nouveau hotel
      </button>
      {isModalOpen && (
        <div
        className="fixed   p-12 inset-0 z-[999] grid h-full w-full place-items-center bg-black border bg-opacity-30  transition-opacity duration-300"
        >
       <div className='bg-white  overflow-y-scroll rounded shadow-md  w-max '>
        <div className='border-dotted border-b-2 p-6 flex justify-between border-black'>
          <h2 className='pl-3'> + Créer un nouveau hotel</h2>
          <button onClick={handleCloseModal}>X</button>
        </div>
       <div className=''></div>
          <form className=" p-6 ">
            <div className="grid grid-cols-2 gap-4">
             <div className='text-start flex flex-col'>
              <label htmlFor="">Nom de l'hotel</label>
              <input className="border p-2 rounded-xl w-80" type="text" />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Email de l'hotel</label>
              <input className="border p-2 rounded-xl w-80" type="email" />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Prix par nuit</label>
              <input className="border p-2 rounded-xl w-80" type="number" />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Adresse</label>
              <input className="border p-2 rounded-xl w-80" type="text" />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Numero de telephone</label>
              <input className="border p-2 rounded-xl w-80" type="number" />
              </div>
              <div className='text-start flex flex-col'>
                <label htmlFor="currency">Devise</label>
                <select className="border p-2 rounded-xl w-80" id="currency">
                  <option value="dollar">Dollar</option>
                  <option value="euro">Euro</option>
                  <option value="fcfa">FCFA</option>
                </select>
              </div>

            </div>
            <div className='text-start'><label className='text-start' htmlFor="">Ajouter une image</label></div>
            <div className="relative border p-5 rounded col-span-2">
                <input type="file" onChange={handleFileChange} className="opacity-0 absolute inset-0 w-full h-full" />
                <div className='w-28'>
             {selectedFile && <img src={selectedFile} alt="Preview" />}
             </div>
                <div className="flex items-center flex-col justify-center">
                  <span className="material-icons text-5xl opacity-30"><FaImage /></span>
                  <span>Ajouter une Image</span>
                </div>
              </div>
         


              <button type="submit" className="mt-4 bg-black text-white p-2 rounded">Enregistrer</button>
              
          </form>
       </div>
        </div>
      )}
    </div>
  );
}
