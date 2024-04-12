import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div
      className={`outer`}
      style={{ height: `40px`, width: `40px` }}
    >
      <div className="inner"/>
    </div>
  );
};

export default Loader;
