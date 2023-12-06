// src/components/layout/Header.tsx
import { SiteConfig } from "@/src/lib/site-config";
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Typography } from "../ui/Typography";
import LogginButton from "@/src/features/auth/LoginButton";
import Image from "next/image";
import { AuthButton } from "@/src/features/auth/AuthButton";

export function Header() {

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
        <Image
              src="./images/logo.svg"
              alt="Logo de Youcode"
              width={40}
              height={30}
        />
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
