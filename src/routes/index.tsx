import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    )
  },
  {
    path: 'about',
    element: <div>About</div>
  }
];

export default routes;
