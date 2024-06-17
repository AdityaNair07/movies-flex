import Image from "next/image";
import React from "react";

const MovieCard = ({ imageUrl, title, type, year }) => {
  return (
    <>
      <div className="card w-[250px] h-[350px] rounded-md border border-gray-100 relative mb-8">
        <div className="w-full h-full px-0 mx-0 rounded-md card-img">
          <img
            src={imageUrl}
            alt="Movie poster"
            className="object-fill w-full h-full bg-cover rounded-md"
          />
        </div>
        <div
          className="absolute bottom-0 w-full px-4 py-2 backdrop-blur-md"
          style={{ borderRadius: "0 0 5px 5px" }}
        >
          <h5 className="text-lg font-bold">
            {title.length > 25 ? title.substring(0, 20) + "..." : title}
          </h5>
          <p className="text-sm">
            {type} ({year})
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
