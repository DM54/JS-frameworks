import React from 'react';
import ResourceDetail from '../components/ResourceDetail';
import ResourceList from '../components/ResourceList';
import ResourceSearch from '../components/ResourceSearch';
import ResourceUpdate from '../components/ResourceUpdate';


const Resources = () => {

  return(
    <div className="container">
    <div className="py-5 text-center">
    <img style={{height: '150px'}} src={process.env.PUBLIC_URL + '/logo512.png'} />
    <h2>Keep Resources</h2>
    <p className="lead">Keep your resource at once place</p>
  </div>
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
        <ResourceList></ResourceList>
      {/* Resource List Ends */}
    </div>
    {/* Update Form Starts */}
        <ResourceUpdate></ResourceUpdate>
    {/* Update Form Ends */}
    {/* Detail View Starts */}
    <div className="col-md-8 order-md-1">
        <ResourceDetail></ResourceDetail>
       </div>
    {/* Detail View Ends */}
  </div>
</div>

  )


}

export default Resources;
