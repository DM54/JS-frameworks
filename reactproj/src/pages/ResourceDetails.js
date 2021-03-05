import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetResource, useGetResources} from '../actions/index';

const ResourceDetails = () =>{
  const {id} = useParams();
  const {resource, loading } = useGetResource(id);

  if (loading){
    return 'is loading';
  }
  return (
    <div className="card">
        <div className="card-header">
          {resource.title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{resource.description}</p>
            <footer className="text-muted mb-2">{resource.type}</footer>
          </blockquote>
          <a href={resource.link} target='_blank'>
            See the resource link
          </a>

        </div>
      </div>

  )
}

export default ResourceDetails;
