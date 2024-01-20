import React from 'react';
import { Puff } from 'react-loader-spinner';

const LoadingComponent = () => {
  return (
    <div className="flex flex-row items-center w-[250px] justify-between mt-5 mx-auto">
      <Puff color="#00BFFF" height={80} width={80} />
      <p className='text-white'>Loading Images...</p>
    </div>
  );
};

export default LoadingComponent;
