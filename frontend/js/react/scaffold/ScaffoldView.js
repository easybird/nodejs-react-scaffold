import React from 'react';

const ScaffoldView = ({ name, message }, { multilan }) => (
  <div>
  <h1>{multilan.scaffoldAppTitle}</h1>
    <h3>{multilan.scaffoldNameField}: {name}</h3>
    <h3>{multilan.scaffoldMessageField}: {message}</h3>
  </div>
);

ScaffoldView.propTypes = {
  name: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

ScaffoldView.contextTypes = {
  multilan: React.PropTypes.object.isRequired
};

export default ScaffoldView;
