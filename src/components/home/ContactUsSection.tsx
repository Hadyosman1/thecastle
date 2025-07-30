import React from "react";
import CTAButton from "../CTAButton";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="watch-cover-bg flex flex-col items-center justify-center"
    >
      <div className="bg-primary/90 text-center z-[2] my-12 flex w-full flex-col items-center gap-4 py-12">
        <h2 className="text-lg font-bold text-white md:text-2xl lg:text-4xl">
          تواصل معنا الآن
        </h2>
        <p className="text-accent text-lg font-semibold md:text-xl">
          جميع ساعاتنا أصلية، بضمان جودة ورفاهية.
        </p>
        <CTAButton
          text="تواصل معنا عبر واتساب"
          className="w-full max-w-[275px] bg-emerald-700 hover:bg-emerald-800 max-sm:text-base"
        />
      </div>
    </section>
  );
}
