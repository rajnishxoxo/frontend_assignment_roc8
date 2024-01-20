import React from 'react';
import { Puff } from 'react-loader-spinner';

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <Puff color="#00BFFF" height={80} width={80} />
      <p>Loading Images...</p>
    </div>
  );
};

export default LoadingComponent;
