import React from 'react';
import img from '../../multimedia/flyer2.jpg';

const Flyer2 = () => {
  return (
    <div className="w-full relative h-52 md:h-64">
      <img
        src={img}
        alt="agua-tulum"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-raleway-700 text-2xl md:text-4xl text-white font-bold">We connect you with the best real estate developments.</h1>
      </div>
    </div>
  );
}

export default Flyer2;