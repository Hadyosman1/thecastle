import { ArrowLeft, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import { SVGProps } from "react";
import CTAButton from "../CTAButton";
import { Button } from "../ui/button";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section>
      <div className="container pt-2 pb-10 md:pt-4 md:pb-14">
        <GoldenGuaranteeBanner />
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-6 text-balance">
              <span className="bg-primary/20 text-primary inline-flex items-center gap-1 rounded-4xl px-4.5 py-2.5 text-xl font-semibold">
                <FluentColorRibbonStar20 className="size-8" />
                جميع ساعاتنا أصلية، بضمان جودة ورفاهية.
              </span>
              <h1 className="text-primary text-2xl leading-tight font-black md:text-4xl lg:text-5xl">
                اكتشف ساعة تعكس شخصيتك وتمنحك حضورًا استثنائيًا.
              </h1>
              <ul className="space-y-3 text-balance">
                <li className="flex items-start gap-2 text-xl font-semibold">
                  <span className="shrink-0 rounded-full bg-yellow-100 p-1">
                    <EosIconsTrustedOrganization className="size-6 text-yellow-600" />
                  </span>
                  <span>
                    نقدم لك تشكيلة مختارة بعناية من الساعات الفخمة التي تجمع بين
                    الأناقة والدقة.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xl font-semibold">
                  <span className="shrink-0 rounded-full bg-yellow-100 p-1">
                    <EosIconsTrustedOrganization className="size-6 text-yellow-600" />
                  </span>
                  <span>
                    نحرص على تقديم تصاميم مميزة تناسب ذوق الرجل الإماراتي وتكمل
                    إطلالته.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-2">
                <CTAButton className="max-w-[280px] grow" />
                <Button
                  className="group h-12 max-w-[240px] grow rounded-3xl text-lg font-bold shadow hover:scale-103 active:scale-98"
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <Link href={"/#discover-now"}>
                    اكتشف الآن
                    <ArrowLeft className="size-6 transition-all duration-300 group-hover:rotate-270" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function GoldenGuaranteeBanner() {
  return (
    <div className="animate-in my-6 rounded-2xl border border-yellow-300 bg-gradient-to-br from-yellow-50 via-yellow-50 to-yellow-200 p-4 shadow-lg">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-yellow-300 p-2 text-yellow-800 shadow-sm">
            <ShieldCheckIcon className="size-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-yellow-800 md:text-2xl">
              الضمان الذهبي :
            </h2>
            <p className="mt-1 leading-relaxed font-semibold text-yellow-950 md:text-lg">
              اشتر الساعة وجربها أسبوع ، لو ماعجبتك لأي سبب نستلمها ، ونرجع لك
              المبلغ بالكامل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluentColorRibbonStar20(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorRibbonStar200)"
          d="M10 12.755a6.97 6.97 0 0 0 4-1.255v6a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-6a6.97 6.97 0 0 0 4 1.255"
        ></path>
        <path
          fill="url(#fluentColorRibbonStar201)"
          d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0"
        ></path>
        <path
          fill="url(#fluentColorRibbonStar202)"
          d="M10.164 5.102a.175.175 0 0 0-.318 0L9.13 6.655a.18.18 0 0 1-.138.1l-1.699.202a.175.175 0 0 0-.098.302L8.451 8.42a.18.18 0 0 1 .053.163L8.17 10.26a.175.175 0 0 0 .257.187l1.493-.835a.18.18 0 0 1 .17 0l1.493.835c.13.073.286-.04.257-.187l-.333-1.677a.18.18 0 0 1 .053-.163l1.255-1.161a.175.175 0 0 0-.098-.302l-1.698-.202a.18.18 0 0 1-.139-.1z"
        ></path>
        <defs>
          <radialGradient
            id="fluentColorRibbonStar200"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 10.2442 -17.6591 0 10 10.486)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#163697"></stop>
            <stop offset={1} stopColor="#29c3ff"></stop>
          </radialGradient>
          <radialGradient
            id="fluentColorRibbonStar201"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="rotate(56.615 26.168 -40.357)scale(66.981 57.3661)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.772} stopColor="#ffcd0f"></stop>
            <stop offset={0.991} stopColor="#e67505"></stop>
          </radialGradient>
          <radialGradient
            id="fluentColorRibbonStar202"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(-2.86665 -9.57203 13.81794 -4.13822 11.438 10.47)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b03111"></stop>
            <stop offset={1} stopColor="#e67505"></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
}

function EosIconsTrustedOrganization(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 9a7 7 0 1 0-10.974 5.76L5 20l2.256.093L8.464 22l3.466-6.004L12 16c.035.002.046-.003.07-.004L15.536 22l1.232-1.866L19 20l-3.026-5.24A6.99 6.99 0 0 0 19 9M7 9a5 5 0 1 1 5 5a5 5 0 0 1-5-5"
      ></path>
      <circle cx={12} cy={9} r={3} fill="currentColor"></circle>
    </svg>
  );
}
