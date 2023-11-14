import React from 'react'

const Amenidades = ({amenidades}) => {
    const numero = amenidades.length 
  return (
    <div className="w-full flex justify-center items-center bg-gray-200 h-auto">
    <div className="py-32">
      <h1
        className="font-raleway-700 text-center text-4xl mdtext-6xl"
        style={{ color: "#1f1f1f" }}
      >
        Amenidades
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        {amenidades?.map((amenidad) => (
          <div key={amenidad.type} className={ numero % 6 === 0 ? "w-1/2 md:w-1/6 py-8" : numero % 5 === 0 ? "w-1/2 md:w-1/5 py-8" : "w-1/2 md:w-1/4 py-8"}>
            <div className="flex justify-center items-center">
              <img
                src={amenidad.imgUrl}
                alt="amenidad "
                className="transition-transform transform hover:scale-110"
                height={130}
                width={130}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg">{amenidad.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Amenidades
