import { AbsoluteFill, useVideoConfig, useCurrentFrame, interpolate } from "remotion";
import React from "react";

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Simple fade-in animation
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
      <div style={{ opacity, fontSize: 80, fontFamily: "sans-serif", fontWeight: "bold" }}>
        AnimAI Short Film
      </div>
    </AbsoluteFill>
  );
};
