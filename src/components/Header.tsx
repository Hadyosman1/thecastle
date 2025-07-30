import Link from "next/link";
import ContactUsViaWhatsAppButton from "./ContactUsViaWhatsAppButton";
import NotoWatch from "./icons/NotoWatch";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 z-40 mt-4 w-full max-md:px-1.5">
      <div className="bg-card/30 container flex h-(--header-height) items-center justify-between rounded-full py-2 shadow backdrop-blur-sm">
        <Link className="order-16 shrink-0" href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex">
          <NavLinks />
        </nav>

        <div className="order-[-1] flex items-center gap-1">
          <MobileMenu className="md:hidden" />
          <ContactUsViaWhatsAppButton className="h-10 md:h-12" />
        </div>
      </div>
    </header>
  );
}

const Logo = () => {
  return (
    <div className="relative flex flex-col rounded-4xl bg-[#EFE4D0] px-4 py-1 text-center font-sans font-bold text-[#A71717] shadow md:px-6 md:py-2">
      <strong className="max-sm:text-sm">THE CASTLE</strong>
      <span className="text-sm max-sm:text-xs">UAE</span>
      <NotoWatch className="absolute bottom-0.5 -left-2 size-7 -rotate-24 md:size-10" />
    </div>
  );
};
