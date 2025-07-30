import CTAButton from "../CTAButton";
import image1 from "@/../public/watch-1.webp";
import image2 from "@/../public/watch-2.webp";
import image3 from "@/../public/watch-3.webp";
import Image from "next/image";

const images = [image1, image2, image3];

export default function DiscoverNowSection() {
  return (
    <>
      <section id="discover-now">
        <div className="container py-12 md:py-16">
          <h2 className="text-primary border-b-primary mb-6 w-fit border-b-2 pb-3 font-bold md:text-4xl lg:text-5xl">
            اكتشف الآن
          </h2>

          <p className="text-muted-foreground text-lg font-semibold md:text-2xl">
            جميع ساعاتنا أصلية، بضمان جودة ورفاهية.
          </p>

          <ul className="grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
            {images.map((image, idx) => (
              <li key={image.src} className="group overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`watch-${idx}`}
                  className="transition-all duration-300 group-hover:scale-115 group-hover:rotate-4"
                  width={700}
                  height={1000}
                />
              </li>
            ))}
          </ul>

          <div className="flex pt-2">
            <CTAButton
              text="أطلب الآن"
              className="mx-auto max-w-[280px] grow [&>svg]:size-5"
            />
          </div>
        </div>
      </section>
    </>
  );
}
