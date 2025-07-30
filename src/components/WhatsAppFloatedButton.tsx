import { WHATSAPP_NUMBER } from "@/constants";
import WhatsappLogo from "./icons/WhatsappLogo";

export default function WhatsAppFloatedButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      className="group fixed right-4 bottom-4 z-20 rounded-full bg-[#1a9647] p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#25d365] md:right-6 md:bottom-6 md:p-4"
    >
      <div
        style={{ animationDuration: "2000ms" }}
        className="group-hover:paused absolute inset-2.5 z-[-2] animate-ping rounded-full bg-[#094921]"
      />
      <WhatsappLogo className="size-7 text-white transition-all duration-300 group-hover:rotate-360 md:size-9" />
      <span className="sr-only">تواصل معنا عبر تطبيق واتساب</span>
    </a>
  );
}
