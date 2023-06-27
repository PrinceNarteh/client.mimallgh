"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({ idx }: { idx: number }) => {
  const [showControls, setShowControls] = useState(false);
  const [activePlayer, setActivePlayer] = useState<number | null>(null);
  const [hasWindow, setHasWindow] = useState(false);

  const handleMouseEnter = (currentItem: number) => {
    setShowControls(true);
    setActivePlayer(currentItem);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
    setActivePlayer(null);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div
      onMouseEnter={() => handleMouseEnter(idx)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {hasWindow && (
        <ReactPlayer
          url={"/videos/sea-shore.mp4"}
          width={"100%"}
          height={"100%"}
          muted
          controls={showControls && activePlayer === idx}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
