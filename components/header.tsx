"use client";
import { useRouter, usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const router = useRouter();
  return (
    <header className="font-[Nimbus] fixed w-screen flex items-center justify-between px-8 py-4 bg-transparent z-10">
      <div className="text-3xl cursor-pointer" onClick={() => {
            router.push("/");
          }}>DOUNIA</div>
      <div className="text-xl flex items-center justify-center space-x-8">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Contact
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="cursor-pointer">Project</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-12 mr-6 bg-black">
            <DropdownMenuLabel
             className="cursor-pointer"
              onClick={() => {
                router.push("/fashion");
              }}
            >
              Fashion
            </DropdownMenuLabel>
            <DropdownMenuLabel
             className="cursor-pointer"
              onClick={() => {
                router.push("/travel");
              }}
            >
              Travel
            </DropdownMenuLabel>
            <DropdownMenuLabel
             className="cursor-pointer"
              onClick={() => {
                router.push("/event");
              }}
            >
              Event
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
