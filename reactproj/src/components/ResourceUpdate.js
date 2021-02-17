import React from 'react';
import ResourceForm from "./ResourceForm";
import { updateResourceApi} from '../actions';


const ResourceUpdate = ({resource, onResourceupdate}) => {

  const UpdateResources = async(resourceData) =>{
   const updateResources= await  updateResourceApi(resourceData._id, resourceData);
   onResourceupdate(updateResources);

  }
  return(
 <ResourceForm onSubmit={UpdateResources} resource={resource}></ResourceForm>
  )

}

export default ResourceUpdate;
