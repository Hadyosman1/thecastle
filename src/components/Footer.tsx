import { Copyright, HeartPulseIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-accent py-2">
      <div className="container py-3 text-center">
        <p className="">
          جميع الحقوق محفوظة <Copyright className="inline size-5" /> THE CASTLE
        </p>
      </div>
      <hr />
      <div className="container py-3 text-center">
        <p className="font-sans font-medium md:text-lg">
          Made with{" "}
          <HeartPulseIcon className="inline size-8 fill-red-500 stroke-1" /> by{" "}
          <a href="https://github.com/Hadyosman1" className="underline">
            Hady Osman
          </a>
        </p>
      </div>
    </footer>
  );
}
