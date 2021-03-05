import React  from 'react';
import ResourceForm from './ResourceForm';
import { updateResourceApi } from '../actions';
import withAlert from '../HOC/withAlert';


 //this is receving from withAlert
  const ResourceUpdate = ({
    resource,
    onResourceupdate,
    alert,
    displayAlert}) => {



  const updateResource = async (resourceData) => {
    try {
      const updatedResourcess = await updateResourceApi(resourceData._id, resourceData);
       onResourceupdate(updatedResourcess);
      displayAlert('success', 'Resource was updated!');
    } catch(e) {
      displayAlert('error', e);
    }
  }

  if(!resource?._id){
    return 'resource is not available';
  }
  return (
    <ResourceForm
      alert={alert}
      onSubmit={updateResource}
      resource={resource} />
  )
}
export default withAlert(ResourceUpdate);

// withAlert => ResourceUpdate
//withAlert is responsible for rendering ResourceUpdate
