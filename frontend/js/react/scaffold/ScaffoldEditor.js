import React from 'react';

const ScaffoldEditor = ({ name, onChangeName }) => {
  const changeName = (event) => onChangeName(event.target.value);

  return (
     <input
       type="text"
       value={name}
       onChange={changeName}
     />
  );
};

ScaffoldEditor.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChangeName: React.PropTypes.func.isRequired
};

export default ScaffoldEditor;
