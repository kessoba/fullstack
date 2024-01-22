import React from 'react'
import  { useState } from 'react';


export default function ModalAjout () {
    const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
<div>   <button
    type="button"
    class="inline-block border rounded-xl text-black  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ,0_4px_18px_0_rgba(59,113,202,0.2)] ,0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-white active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" onClick={handleOpenModal}>
    +Créer un nouveau hotel
</button>
    <div
        className={`fixed left-0 top-0 z-[1055] ${
          isModalOpen ? 'block' : 'hidden'
        } h-full w-full overflow-y-auto overflow-x-hidden outline-none`}
      >
     
      <div class="relative p-4">
        <p>
          This is some placeholder content to show a vertically centered
          modal. We've added some extra copy here to show how vertically
          centering the modal works when combined with scrollable modals.
          We also use some repeated line breaks to quickly extend the
          height of the content, thereby triggering the scrolling. When
          content becomes longer than the predefined max-height of modal,
          content will be cropped and scrollable within the modal.
        </p>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <p>Just like that.</p>
      </div>
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button">
          Close
        </button>
        <button
          type="button">
          Save changes
        </button>
      </div>
    </div>
</div>

  )
}
