import React from 'react';
import ResourceForm from '../components/ResourceForm';
import {createResourceApi} from '../actions/index';
import withAlert from '../HOC/withAlert';
import { useHistory } from 'react-router-dom';

const ResourceNew = ({alert, displayAlert}) => {
  const router = useHistory();

  const createResource = async resource => {

    try{
     const {_id} =  await createResourceApi(resource);
      router.push(`/resources/${_id}`);
    }catch(e){
      displayAlert("error", "Resource was not created!");
    }


  }
  return (
    <ResourceForm
    onSubmit = {createResource}
    alert = {alert}
    ></ResourceForm>
  )
}

export default withAlert(ResourceNew);
