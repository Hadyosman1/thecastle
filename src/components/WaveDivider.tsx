import React from "react";

const WaveDivider: React.FC = () => (
  <div style={{ lineHeight: 0 }} aria-hidden="true">
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "80px", display: "block" }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"
        fill="url(#waveGradient)"
      />
    </svg>
  </div>
);

export default WaveDivider;
