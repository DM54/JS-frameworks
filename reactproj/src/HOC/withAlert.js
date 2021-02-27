//HOC HIGH ORDER COMPONENT is a function that takes a component and returns a new component.
//Newly returned component renders original component and provide to it additional functionality.
/*const withAlert = (Component) => {
  return (props) =>{

  }

}*/

import React, {useState, useRef, useEffect} from 'react';


const initAlert = () => ({success: null, error: null})

const withAlert = Component => props =>{

  const [alert, setAlert] = useState(initAlert());
  const settimeoutid = useRef(null);
  const resourceId = props?.resource?._id;

  const resetAlert = () => setAlert(initAlert());
  const resettimeout = () =>  settimeoutid?.current && clearTimeout(settimeoutid.current);


  useEffect(() => {
    resetAlert();
    resettimeout();
    return () => resettimeout();
  }, [resourceId])

  const displayAlert = (type, message) => {

    const _alert = initAlert();
    _alert[type] = message;
    setAlert(_alert);
    settimeoutid.current= setTimeout(() => {

      resetAlert();
    }, 3000);
  }


  //passing through withAlert to resourceUpdate.
   return (
     <Component  displayAlert={displayAlert} alert={alert}  {...props}></Component>
   )
}

export default withAlert;
