import { WHATSAPP_NUMBER } from "@/constants";
import { cn } from "@/lib/utils";
import WhatsappLogo from "./icons/WhatsappLogo";
import { Button, ButtonProps } from "./ui/button";

type Props = ButtonProps;

export default function ContactUsViaWhatsAppButton({
  className,
  ...props
}: Props) {
  return (
    <Button
      variant="default"
      size="lg"
      className={cn("group h-12 gap-1 rounded-3xl hover:scale-103", className)}
      {...props}
      asChild
    >
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
        <span className="hidden md:inline"> تواصل معنا عبر </span>واتساب
        <WhatsappLogo className="size-6 transition-all duration-300 group-hover:rotate-360" />
      </a>
    </Button>
  );
}
