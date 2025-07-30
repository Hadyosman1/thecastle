import { CheckIcon, WatchIcon } from "lucide-react";
import HandWithWatch from "../icons/HandWithWatch";
import WatchVideo from "./WatchVideo";

const features = [
  "جميع ساعاتنا أصلية",
  "الدفع عند الإستلام",
  "جودة تصنيع عالية",
  "ساعات مقاومة للماء",
  "ضمان لمدة سنة",
  "شحن سريع",
  "دعم فني متواصل",
  "تصاميم مميزة",
  "تغليف فخم",
  "ضمان تجربة أسبوع",
];

export default function WhyUsSection() {
  return (
    <section className="relative" id="why-us">
      <WatchIcon className="text-primary absolute left-1/6 size-24 opacity-15 max-md:top-1/6 sm:size-32 md:bottom-0 md:left-1/5 md:size-64" />
      <HandWithWatch className="absolute top-0 left-1/4 size-24 text-yellow-400 opacity-30 sm:size-32 md:size-64" />
      <div className="relative container grid items-center gap-7 py-12 md:grid-cols-5 md:gap-10 md:py-16">
        <div className="max-md:order-2 md:col-span-2">
          <WatchVideo />
        </div>
        <article className="text-balance md:col-span-3">
          <h2 className="text-xl font-black md:text-3xl lg:text-5xl">
            لماذا تختار{" "}
            <strong className="text-primary font-sans">The Castle</strong> ؟
          </h2>
          <p className="text-muted-foreground mt-6 max-w-[500px] text-lg leading-relaxed font-medium md:text-xl">
            نؤمن في The Castle بأن كل تفصيلة تصنع الفرق. نقدم لك ساعات فخمة
            تجمع بين التصميم الأنيق والجودة العالية، مع اهتمام دقيق بالتفاصيل.
            سواء كنت تبحث عن قطعة تعكس شخصيتك أو هدية مميزة، فإن ساعاتنا مصممة
            لتلائم جميع الأذواق والمناسبات. التميز ليس خيارًا، بل أسلوب حياة.
          </p>
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="shrink-0 rounded-full bg-yellow-100 p-1">
                  <CheckIcon className="size-5 stroke-3 text-yellow-600" />
                </span>
                <p className="text-muted-foreground text-lg font-semibold">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
