import React from 'react';
import ResourceForm from "./ResourceForm";
import {UpdateResourcesApi} from '../actions';


const ResourceUpdate = ({resource}) => {

  const UpdateResources = (formData) =>{


  }
  return(
 <ResourceForm onSubmit={UpdateResources} resource={resource}></ResourceForm>
  )

}

export default ResourceUpdate;
