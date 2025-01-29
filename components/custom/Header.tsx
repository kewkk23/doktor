"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginButton from "./LoginButton";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userPicture, setUserPicture] = useState<string>("");
  const path = usePathname();
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const checkUser = () => {
    const puser = localStorage.getItem("user");
    if (puser) {
      setIsLogged(true);
      const user = JSON.parse(puser);
      setUserPicture(user.picture);
    } else {
      setIsLogged(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsDown(true);
      } else {
        setIsDown(false);
      }
    });
  }, []);
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <header
      className={` ${
        path == "/sprawdz-wizyte" ? "static bg-white shadow-md" : "fixed"
      } w-full z-30 transition-all ease-in-out  flex justify-center items-center ${
        isDown ? "h-[4rem] shadow-md bg-white" : "h-[5rem]"
      }`}
    >
      <nav className="w-full lg:w-11/12 xl:w-[60%] flex justify-between items-center h-full">
        <Link href={"/#hero"} className="flex items-center gap-2">
          <img className="w-[10%]" src="/logo.png" alt="logo" />
          <span className="font-bold text-xl">DOKTOR</span>
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link className="link" href={"/#about"}>
            O mnie
          </Link>
          <Link className="link" href={"/#packages"}>
            Pakiety
          </Link>
          <Link className="link" href={"/#contact"}>
            Kontakt
          </Link>
          {isLogged ? (
            <div className="flex items-center gap-2">
              <Link href={"/sprawdz-wizyte"}>
                <Button variant={"secondary"} className="font-bold px-8">
                  Sprawdź wizytę
                </Button>
              </Link>
              <Popover>
                <PopoverTrigger>
                  {" "}
                  <Image
                    src={userPicture}
                    alt="zdjęcie uzytkownika"
                    width={40}
                    height={50}
                    className="rounded-full hover:shadow-md transition-shadow ease-in-out"
                  />
                </PopoverTrigger>
                <PopoverContent className="flex justify-center items-center w-full">
                  <Button onClick={() => logOut()} className="font-bold">
                    Wyloguj się
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className="flex md:hidden gap-3 px-4">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu size={40} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription className="flex flex-col h-screen w-full justify-evenly items-center">
                  <Link className="link text-2xl" href={"/#about"}>
                    O mnie
                  </Link>
                  <Link className="link text-2xl" href={"/#packages"}>
                    Pakiety
                  </Link>
                  <Link className="link text-2xl" href={"/#contact"}>
                    Kontakt
                  </Link>
                  {isLogged ? (
                    <Link className="w-full" href={"/sprawdz-wizyte"}>
                      <Button
                        variant={"secondary"}
                        className="font-bold w-full py-6 px-8"
                      >
                        Sprawdź wizytę
                      </Button>
                    </Link>
                  ) : (
                    <LoginButton />
                  )}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          {isLogged && (
            <Popover>
              <PopoverTrigger>
                {" "}
                <Image
                  src={userPicture}
                  alt="zdjęcie uzytkownika"
                  width={140}
                  height={50}
                  className="rounded-full hover:shadow-md transition-shadow ease-in-out"
                />
              </PopoverTrigger>
              <PopoverContent className="flex justify-center items-center w-full">
                <Button onClick={() => logOut()} className="font-bold">
                  Wyloguj się
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
