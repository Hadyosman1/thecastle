"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export default function MobileMenu({ className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={className}>
        <Button variant="secondary" size="icon" className="rounded-xl">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent dir="rtl" side="right" className="w-full">
        <SheetHeader>
          <SheetTitle className="text-left">روابط التنقل</SheetTitle>
          <SheetDescription className="sr-only">
            اختر من القائمة
          </SheetDescription>
        </SheetHeader>
        <div
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A") setOpen(false);
          }}
          className="flex grow flex-col items-center justify-center gap-2"
        >
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
