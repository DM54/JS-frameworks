import React, { useState } from 'react';
import Modal from './shared/modal';

const SettingModal = () => {
  const [isOpen, setisOpen] = useState(false);

  return(
    <>
    <button  onClick={() =>setisOpen(true)} className='btn btn-sm btn-success mb-2'>Settings</button>
    <Modal isOpen={isOpen} onClose={() =>setisOpen(false)}></Modal>
    </>
  )
}

export default SettingModal;
