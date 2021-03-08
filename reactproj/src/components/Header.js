import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

  return(
    <div className="py-5 text-center app-header">
    <img
    alt ='react logo'
    style={{height: '150px'}}
    src={process.env.PUBLIC_URL + '/logo512.png'} />
    <h2>Keep Resources</h2>
    <p className="lead">Keep your resource at once place</p>
    {/*exact is so the home link doesn't stay active when navigate other pages. */}
    <NavLink to='/' exact className="btn btn-outline-primary mr-2">Home</NavLink>
    <NavLink to='/resources/new' className="btn btn-outline-primary mr-2">New</NavLink>
    <NavLink to='/about' className="btn btn-outline-primary mr-2">About</NavLink>
  </div>
  )
}

export default Header;
