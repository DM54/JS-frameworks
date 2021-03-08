import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import serveStatic from 'serve-static';
import {useGetResource, useGetResources} from '../actions/index';
import {UseSetting} from '../context/SettingsProvider';

const ResourceDetails = () =>{
  const {id} = useParams();
  const {resource, loading, error } = useGetResource(id);
  const {settings} = UseSetting();

  if (loading){
    return 'is loading';
  }

  if(error){
    return ' resource cannot load.';
  }
  return (
    <div className={`card ${settings?.theme}`} >
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
