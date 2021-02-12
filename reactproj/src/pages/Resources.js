import React, {useState} from 'react';
import Header from '../components/Header';
import ResourceDetail from '../components/ResourceDetail';
import ResourceList from '../components/ResourceList';
import ResourceSearch from '../components/ResourceSearch';
import ResourceUpdate from '../components/ResourceUpdate';


const initialResources = [
  {
    _id: '1',
    title: 'Resource 1',
    description: 'Description 1',
    link: 'https://google.com',
    type: 'blog'
  },

    {
    _id: '2',
    title: 'Resource 2',
    description: 'Description 2',
    link: 'https://google.com',
    type: 'video'
  },

  {
  _id: '3',
  title: 'Resource 3',
  description: 'Description 3',
  link: 'https://google.com',
  type: 'book'
  },

]

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState();
  const [resources, setResources] = useState(initialResources);
  const [isdetailview, setDetailview] = useState(true);

  const addResources = () => {
    const _id = '_' + Math.random.toString(36).substr(2,9);
    const newSource = {
      _id,
      title: `title ${_id}`,
      description: `description ${_id}`,
      link: 'https://google.com',
      type: 'video'
    }

    //to add new source at top -> setResources([newSource, ...resources]);
    setResources([...resources, newSource]);
  }

  const hasResources = resources && resources.length > 0;
  const activeResource = selectedResource || (hasResources && resources[0]) || null;


  return(
    <div className="container">
    <Header></Header>
  <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your Resources</span>
        <span className="badge badge-secondary badge-pill">6</span>
      </h4>
      {/* Seach Inputs Starts */}
          <ResourceSearch></ResourceSearch>
      {/* Seach Inputs Ends */}
      {/* Resource List Starts */}
        <ResourceList
        activeId={activeResource?._id}
        onItemClick = {setSelectedResource}
        resources ={resources}></ResourceList>
        <button onClick={addResources} className='btn btn-primary'>Add Resources</button>
      {/* Resource List Ends */}
    </div>
    {/* Update Form Starts */}
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3"> Resource {activeResource?._id}
      <button onClick={ () => setDetailview(!isdetailview)}  className= {`btn btn-sm ml-2 ${isdetailview ? 'btn-warning' : 'btn-primary'}`}>
        { isdetailview ? 'edit' : 'Detail'}
      </button>
      </h4>
      {/*if detailview is true display resourcedetail if it is false display resourceupdate. */}
      {
        isdetailview ? <ResourceDetail resource = {{...activeResource}}></ResourceDetail> : <ResourceUpdate></ResourceUpdate>
      }

        </div>
    {/* Update Form Ends */}
    {/* Detail View Starts */}

    {/* Detail View Ends */}
  </div>
</div>

  )


}

export default Resources;
