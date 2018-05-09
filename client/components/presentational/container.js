/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import React from 'react';

const PageContainer = (props) => (<div className="container-fluid">
  <div className="jumbotron">
    <h1 className="display-3">Search for movies</h1>
    <p className="lead">This is a simple lookup for movie titles.</p>
    <hr className="my-4"/>
    <p className="lead">
    </p>
  </div>
  <div>
    {props.children}
  </div>
</div>);

export default PageContainer;
