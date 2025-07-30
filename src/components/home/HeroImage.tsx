"use client";

import watchImage1 from "@/../public/watch-1.webp";
import watchImage2 from "@/../public/watch-2.webp";
import watchImage3 from "@/../public/watch-3.webp";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";

export default function HeroImage() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Image
        priority
        src={watchImage1}
        alt="watch"
        className="img-shadow-shape w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-98 hover:rotate-2"
        onClick={() => setToggler(!toggler)}
        width={600}
        height={1000}
      />
      <FsLightbox
        toggler={toggler}
        sources={[watchImage1.src, watchImage2.src, watchImage3.src]}
      />
    </>
  );
}
