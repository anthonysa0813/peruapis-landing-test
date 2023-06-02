"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef } from "react";

export default function VideoComponent() {
  const videoEl: any = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error: any) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="py-20">
      <div className="rounded rounded-lg overflow-hidden">
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls={false}
          src="https://peruapis.com/img/video.mp4"
          ref={videoEl}
          className="rounded rounded-lg"
        />
      </div>
    </div>
  );
}

VideoComponent.useClient = true;
