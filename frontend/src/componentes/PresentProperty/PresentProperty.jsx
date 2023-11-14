import React from 'react'
import MyCarousel from '../Carousel/Carousel'
const PresentProperty = ({name, price, description, date, photos}) => {
  return (
    <div className="w-full flex justify-center items-center py-12 mt-6">
    <div className="max-w-[1200px] flex justify-center items-center">
      <div className="w-full h-auto">
        <div className="w-full flex flex-wrap justify-center items-center">
          <div className="w-full md:w-2/3">
            <h1
              className="font-outfit-800 text-left text-4xl md:text-6xl"
              style={{ color: "#1f1f1f" }}
            >
              {name}
            </h1>
            <p className="text-left text-lg">{description}</p>
          </div>
          <div className="w-full md:w-1/3 justify-end space-y-4 py-4">
            <div className="flex justify-end ">
                <div className="w-auto px-4 py-2 border border-black">
                <p>Entrega {date}</p>
                </div>
            </div>
            <div className="flex justify-end">
              <button
                className="w-full rounded-md h-14 text-xl transition-transform transform hover:scale-105"
                style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
              >
                Unidades desde {price}
              </button>
            </div>
          </div>
        </div>
        <div>
          <MyCarousel images={photos}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PresentProperty
