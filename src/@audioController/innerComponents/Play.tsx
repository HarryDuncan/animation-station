import React from "react";
import { HoverableIcon } from "./HoverableIcon";

interface IPlayProps {
  playing: boolean;
  playPause: () => void;
}

export const Play: React.FunctionComponent<IPlayProps> = ({
  playing,
  playPause,
}) => {
  return (
    <div id="play" className={"above-visualizer"} onClick={playPause}>
      <HoverableIcon iconName={playing ? "pause" : "play"} />
    </div>
  );
};
