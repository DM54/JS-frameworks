import React, { useState, useEffect, useRef } from 'react';
import ResourceForm from './ResourceForm';
import { updateResourceApi } from '../actions';


const initAlert = () => ({success: null, error: null})

const ResourceUpdate = ({resourceS, onResourceUpdate}) => {

  const [alert, setAlert] = useState(initAlert());
  const settimeoutid = useRef(null);

  const resetAlert = () => setAlert(initAlert());

  useEffect(() => {
    resetAlert();
    settimeoutid?.current && clearTimeout(settimeoutid.current);
  }, [resourceS]);

  const displayAlert = (type, message) => {

    const _alert = initAlert();
    _alert[type] = message;
    setAlert(_alert);
    settimeoutid.current= setTimeout(() => {

      resetAlert();
    }, 3000);
  }

  const updateResource = async (resourceData) => {
    try {
      const updatedResourcess = await updateResourceApi(resourceData._id, resourceData);
      onResourceUpdate(updatedResourcess);
      displayAlert('success', 'Resouce was updated!');
    } catch(e) {
      displayAlert('error', e);
    }
  }
  return (
    <ResourceForm
      alert={alert}
      onSubmit={updateResource}
      resourceS={resourceS} />
  )
}
export default ResourceUpdate;
