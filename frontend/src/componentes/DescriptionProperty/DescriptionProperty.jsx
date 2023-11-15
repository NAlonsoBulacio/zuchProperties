import React from "react";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import Theasys from "../Theasys/Theasys";
const DescriptionProperty = ({
  full_description,
  name,
  youtube_link,
  theasys_link,
  brochure_link,
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1180px] flex flex-wrap justify-center items-center py-10 md:py-20">
        <div
          className={
            youtube_link || theasys_link 
              ? "w-full md:w-1/2 flex justify-center items-center"
              : "w-full flex justify-center items-center"
          }
        >
          <div className="w-4/5">
            <div
              className={
                youtube_link || theasys_link
                  ? "flex justify-start items-center py-4"
                  : "flex justify-center items-center py-4"
              }
            >
              <h1
                className={
                  youtube_link || theasys_link
                    ? "font-outfit-800 text-center md:text-left text-3xl sm:text-5xl"
                    : "font-outfit-800 text-center text-3xl sm:text-5xl"
                }
              >
                {name}
              </h1>
            </div>
            <div className={youtube_link || theasys_link ? "text-left py-4" : "text-center py-4"}>
              {full_description?.map((description) => (
                <p className="text-lg text-gray-500 py-4">{description}</p>
              ))}
            </div>
            <div className={youtube_link || theasys_link ? "flex justify-center md:justify-start items-center py-4" : "flex justify-center items-center py-4"}>
              <a href={brochure_link}>
                <button
                  className="w-full rounded-md h-14 px-4 text-lg transition-transform transform hover:scale-105"
                  style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
                >
                  Descargue el brochure
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
        {youtube_link ? (
        <YoutubePlayer videoId={youtube_link} />
      ) : theasys_link ? (
        <Theasys link={theasys_link} />
      ) : (
        ''
      )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionProperty;
