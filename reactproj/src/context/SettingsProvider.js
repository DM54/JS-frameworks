import React, { useContext, useState} from 'react';


const DEFAULT_SETTINGS =
  {theme: 'Light',
   fontSize: '17'}



export const SettingsContext = React.createContext(DEFAULT_SETTINGS);

const SettingsProvider = ({children}) =>{
  const [settings, setSettings] = useState(getSettings());

  function getSettings() {
    const settings = localStorage.getItem('resource-settings');
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
  }

  function saveSettings(settings){
    localStorage.setItem('resource-settings', JSON.stringify(settings));
    setSettings(settings);
  }

  //all pages can receive settingAPI
  const settingApi = {
    settings,
    saveSettings
  }

  return (
    <SettingsContext.Provider value={settingApi}>
      {/*the children in app.js will receive settings through here. */}
      {children(settings)}
    </SettingsContext.Provider>
  )


}


export const UseSetting = () => useContext(SettingsContext);
export default SettingsProvider;
