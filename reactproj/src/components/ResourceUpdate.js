import React, { useState } from 'react';
import ResourceForm from "./ResourceForm";
import { updateResourceApi} from '../actions';


const createAlert = () => ({success: null, error: null})


const ResourceUpdate = ({resource, onResourceUpdate}) => {
  const [alert, setAlert] = useState(createAlert());

  const UpdateResources = async(resourceData) =>{
    const _alert = createAlert();
    try {
      const updatedResource = await updateResourceApi(resourceData._id, resourceData);
      onResourceUpdate(updatedResource);
      // set success alert
      _alert.success = 'Resource was updated!';
      setAlert(_alert);
    }
    catch(e) {
      _alert.error = "resource was not updated";
      setAlert(_alert);
    }
  }
   return(
 <ResourceForm  alert={alert} onSubmit={UpdateResources} resource={resource}></ResourceForm>
  )


}

export default ResourceUpdate;
