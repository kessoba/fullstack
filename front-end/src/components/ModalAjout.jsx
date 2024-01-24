import React, { useState } from 'react';

export default function ModalAjout() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
      className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black border bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
    >
       Rest of your modal content 
    </div>

     )} 
      {/* Additional content */}
    </div>
  
  );
}
