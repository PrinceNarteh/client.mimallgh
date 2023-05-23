import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoPlayer = ({ idx }: { idx: number }) => {
  const [showControls, setShowControls] = useState(false);
  const [activePlayer, setActivePlayer] = useState<number | null>(null);

  const handleMouseEnter = (currentItem: number) => {
    setShowControls(true);
    setActivePlayer(currentItem);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
    setActivePlayer(null);
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnter(idx)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <ReactPlayer
        url={"/videos/sea-shore.mp4"}
        width={"100%"}
        height={"100%"}
        muted
        controls={showControls && activePlayer === idx}
      />
    </div>
  );
};

export default VideoPlayer;
