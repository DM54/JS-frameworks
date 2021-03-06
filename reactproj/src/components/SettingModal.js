import React, { useState } from 'react';
import Modal from './shared/modal';
import SettingForm from './SettingForm';

const SettingModal = () => {
  const [isOpen, setisOpen] = useState(false);

  const saveSettings = (settings) => {
    alert(JSON.stringify(settings));
    setisOpen(false);
  }

  return(
    <>
    <button  onClick={() =>setisOpen(true)} className='btn btn-sm btn-success mb-2'>Settings</button>
    <Modal isOpen={isOpen} onClose={() =>setisOpen(false)}> <SettingForm onSubmit={saveSettings}></SettingForm></Modal>
    </>
  )
}

export default SettingModal;
