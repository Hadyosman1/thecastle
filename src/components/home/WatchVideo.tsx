"use client";

import FSLightbox from "fslightbox-react";
import { useState } from "react";

export default function WatchVideo() {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full cursor-pointer rounded-2xl shadow-md"
        onClick={() => setToggler(!toggler)}
      >
        <source src="/watch_video.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <FSLightbox toggler={toggler} sources={["/watch_video.mp4"]} />
    </>
  );
}
