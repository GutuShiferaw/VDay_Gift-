import React from "react";
import Vid from "../assets/vid.mp4";
export default function Gift() {
  return (
    <div className="flex gift-cont h-screen w-screen">
      <div className="flex items-center justify-center w-full">
        <div className="video-window text-center">
          <video width="100%" height="100%" controls className=" mb-8">
            <source src={Vid} />
            Your browser does not support the video tag.
          </video>
          <a
            href="/"
            className=" text-2xl text-red-600 font-bold bg-white bg-opacity-60 p-2 rounded-xl hover:bg-opacity-90"
          >
            {" "}
            Go back to Home{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
