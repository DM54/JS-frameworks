import React from 'react';
import {useParams} from 'react-router-dom';

const ResourceDetails = () =>{
  const param = useParams();
  return(
    <h1>Detail Page - {param.id}</h1>
  )

}

export default ResourceDetails;
