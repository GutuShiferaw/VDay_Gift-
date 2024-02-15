import React from "react";

// Replace this with your YouTube video ID
const youtubeVideoId = "Gil5euOkl4M";

export default function Gift() {
  return (
    <div className="flex gift-cont h-screen w-screen">
      <div className="flex items-center justify-center w-full">
        <div className="video-window text-center">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className=" mb-8"
          ></iframe>
          <a
            href="/"
            className="text-2xl text-red-600 font-bold bg-white bg-opacity-60 p-2 rounded-xl hover:bg-opacity-90"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
