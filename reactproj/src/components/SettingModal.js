import React, { useState, useContext } from 'react';
import Modal from './shared/modal';
import SettingForm from './SettingForm';
import { UseSetting} from '../context/SettingsProvider';

const SettingModal = () => {
  const {settings, saveSettings} = UseSetting();
  const [isOpen, setisOpen] = useState(false);

  const handleSave = (settings) =>{
    saveSettings(settings);
    setisOpen(false);

  }

  return(
    <>
    <button  onClick={() =>setisOpen(true)} className='btn btn-sm btn-success mb-2'>Settings</button>
    <Modal isOpen={isOpen} onClose={() =>setisOpen(false)}> <SettingForm settings={settings} onSubmit={handleSave}></SettingForm></Modal>
    </>
  )
}

export default SettingModal;
