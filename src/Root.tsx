import React from "react";
import {Composition} from "remotion";
import {CanjuanEpisode, canjuanDuration} from "./CanjuanEpisode";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="canjuan-episode-1"
      component={CanjuanEpisode}
      durationInFrames={canjuanDuration}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
