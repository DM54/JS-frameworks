import React, { useEffect, useState } from 'react';
import ResourceSearch from '../components/ResourceSearch';
import ResourceList from '../components/ResourceList';
import ResourceDetail from '../components/ResourceDetail';
import ResourceUpdate from '../components/ResourceUpdate';

import { getResources, deleteResourceApi, searchResourcesApi, useGetResources } from '../actions';
import SettingModal from '../components/SettingModal';
import { UseSetting } from '../context/SettingsProvider';


const Resource = () => {
  const [selectedResource, setSetlectedResource] = useState();
  const {resources, setResources, loading, refetchResources} = useGetResources();
  const [isDetailView, setDetailView] = useState(true);

useEffect(() => {
  async function _getResources() {
    const _resources = await getResources();
    setResources(_resources);
  }

  _getResources();
}, [])

  /*const addResource = () => {
    const _id = '_' + Math.random().toString(36).substr(2, 9);
    const newSource = {
      _id,
      title: `Title ${_id}`,
      description: `Description ${_id}`,
      link: 'https://google.com',
      type: 'video'
    }
    setResources([newSource, ...resources]);
  }*/

  const findresourceindex = resource =>{
    return resources.findIndex( re => re._id === resource._id);
  }

  const searchResources = (title) => {
     //TODO: to refetch resources
  if(!title){
    refetchResources();
  }
    searchResourcesApi(title)
    .then(resources => {
      resources.length >0 ? setSetlectedResource(resources[0]) : setSetlectedResource(null)
      setResources(resources)})
  }
  const mutateResourcesList = (resource, task )=> {

     const ResourceIndex = findresourceindex(resource);
     const copy = [...resources];

     if(task==='update'){
      copy[ResourceIndex] = resource;
     }
     else{
      //delete the resource index, just 1
      copy.splice(ResourceIndex,1);
     }

     return copy;
    }

    const hydrateResources = (updatedResource, task)=> {
      const updatedResources = mutateResourcesList(updatedResource, task);

      setResources(updatedResources);

      return updatedResources;

    }

  const handleResourceUpdate = updatedResource => {
    hydrateResources(updatedResource, 'update');
    setSetlectedResource(updatedResource);
  }

  const deleteResources = async () => {
    const isConfirm = window.confirm('Are you sure you want to delete this resource?');

    if(isConfirm){
     const deletedResource= await deleteResourceApi(activeResource?._id);
     const updatedResources= hydrateResources(deletedResource, 'delete')
      //set the resource whichever it is there set it first and if none then null.
      setSetlectedResource(updatedResources[0] || null );
  //check if there aren't any resources left.
     if(updatedResources.length=== 0 && !isDetailView){
       setDetailView(true);
     }
    }
  }

const {settings} = UseSetting();


  const hasResources = resources && resources.length > 0;
  const activeResource = selectedResource || (hasResources && resources[0]) || null;
  //const activeResource = null;
  return (

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <SettingModal></SettingModal>
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className={`resource ${settings?.theme}`}>Your Resources</span>
            <span className="badge badge-secondary badge-pill">{resources.length}</span>
          </h4>
          <ResourceSearch onSearch={searchResources} />
          {loading ? 'loading resources':
          <ResourceList
            activeId={activeResource?._id}
            onItemClick={setSetlectedResource}
            resources={resources} />
          }
         {/*<button onClick={addResource} className="btn btn-primary">Add Resource</button>*/}
        </div>
        <div className="col-md-8 order-md-1">

          <h4 className="mb-3">Resource {activeResource?._id}
          { hasResources &&
            <>
              <button
              onClick={() => setDetailView(!isDetailView)}
              className={`btn btn-sm ml-2 mr-2 ${isDetailView ? 'btn-warning' : 'btn-primary'}`}>
              { isDetailView ? 'Edit' : 'Detail'}
            </button>
            <button  onClick= {deleteResources} className="btn btn-danger btn-sm"> Delete</button>
            </>
          }

          </h4>
          { isDetailView ?
            <ResourceDetail resource={activeResource} /> :
            <ResourceUpdate resource = {activeResource}
               onResourceupdate={handleResourceUpdate} /> }
        </div>
      </div>

  )
}
export default Resource;
