import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link href="/#why-us" className="nav-link">
        لماذا تختارنا؟
      </Link>
      <Link href="/#discover-now" className="nav-link">
        اكتشف الآن
      </Link>
      <Link href="/#contact-us" className="nav-link">
        تواصل معنا
      </Link>
    </>
  );
}
