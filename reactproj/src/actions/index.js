import axios from 'axios';

export function getResources() {

  return axios
  .get('http://localhost:3000/api/resources')
  .then(res => res.data)

}

export function UpdateResourcesApi({reourceID, ressourceData})
{
  return axios
  .patch(`'http://localhost:3000/api/resources/${reourceID}'`, ressourceData)
  .then(res => res.data);
}
