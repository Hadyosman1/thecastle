import { WHATSAPP_NUMBER } from "@/constants";
import { cn } from "@/lib/utils";
import { PhoneCallIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

type Props = ButtonProps & {
  text?: string;
};

export default function CTAButton({
  className,
  text = "تواصل معنا",
  ...props
}: Props) {
  return (
    <Button
      className={cn(
        "group h-12 rounded-3xl text-lg font-bold shadow hover:scale-103 active:scale-98",
        className,
      )}
      size="lg"
      asChild
      {...props}
    >
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
        {text}
        <PhoneCallIcon className="size-6 transition-all duration-300 group-hover:rotate-360" />
      </a>
    </Button>
  );
}
