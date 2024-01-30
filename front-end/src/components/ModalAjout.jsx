import React, { useState,useEffect } from 'react';
import { FaImage } from "react-icons/fa";
import HotelServices from "../services/HotelServices"
import { getUserDetails } from '../Utils/getUser';

export default function ModalAjout({ isModalOpen, setModalOpen }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [NomHotel, setNomHotel] = useState('');
  const [email, setEmail] = useState('');
  const [Prix, setPrix] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [Tel, setTel] = useState('');
  const [Devise, setDevise] = useState('');
  const user = getUserDetails();
  const [image,setImage]= useState(null)
  const [hotels, setHotels] = useState([]);


  const handleOpenModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
    setImage(selectedFile)
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await HotelServices.getHotels(); // Assurez-vous que cette fonction existe et renvoie les hôtels
        setHotels(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHotels();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('NomHotel', NomHotel);
      formData.append('email', email);
      formData.append('Prix', Prix);
      formData.append('Adresse', Adresse);
      formData.append('Tel', Tel);
      formData.append('Devise', Devise);
      formData.append('CreatedBy', user.userId);
      formData.append('image', SelectedFile);

      const response = await HotelServices.createHotel(formData);
      console.log(response.data);
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  // ... autres fonctions et rendus ...


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
          <form className=" p-6 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
             <div className='text-start flex flex-col'>
              <label htmlFor="">Nom de l'hotel</label>
              <input className="border p-2 rounded-xl w-80" type="text" value={NomHotel} onChange={(e) => setNomHotel(e.target.value)} />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Adresse</label>
              <input className="border p-2 rounded-xl w-80" type="text" value={Adresse} onChange={(e) => setAdresse(e.target.value)} />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Email de l'hotel</label>
              <input className="border p-2 rounded-xl w-80" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Numero</label>
              <input className="border p-2 rounded-xl w-80" type="text" value={Tel} onChange={(e) => setTel(e.target.value)} />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Prix par nuit</label>
              <input className="border p-2 rounded-xl w-80" type="number" value={Prix} onChange={(e) => setPrix(e.target.value)} />
              </div>
              <div className='text-start flex flex-col'>
              <label htmlFor="">Devise</label>
              <input className="border p-2 rounded-xl w-80" type="text" value={Devise} onChange={(e) => setDevise(e.target.value)} />
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
              <button type="submit" className="mt-4 bg-black text-white p-2 rounded">Envoyer</button>
              </div>
          </form>
       </div>
        </div>
      )}
    </div>
  );
}
