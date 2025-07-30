import CTAButton from "../CTAButton";
import Image from "next/image";
import watchCover from "@/../public/watch_cover.webp";
import watchPic from "@/../public/watch-1.webp";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center"
    >
      <Image
        src={watchCover}
        alt="cover"
        fill
        className="hidden object-cover md:block"
        unoptimized
        quality={100}
      />
      <Image
        src={watchPic}
        alt="cover"
        fill
        className="object-cover md:hidden"
        unoptimized
        quality={100}
      />
      <div className="bg-primary/90 z-[2] my-12 flex w-full flex-col items-center gap-4 py-12 text-center">
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
