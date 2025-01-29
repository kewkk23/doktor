"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LoginButton from "./LoginButton";
import Link from "next/link";

const Hero = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const checkUser = () => {
    const puser = localStorage.getItem("user");
    if (puser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <section
      id="hero"
      className="w-full h-[70vh] py-24 md:py-0 flex justify-center items-center"
    >
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col md:flex-row md:justify-between items-center">
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <h3 className="text-lg tracking-widest uppercase">Doktor</h3>
          <h1 className="text-5xl font-extrabold">
            Sprawdź swój stan zdrowia u{" "}
            <span className="text-primary">
              <strong>EKSPERTA</strong>
            </span>
          </h1>
          <p className="mt-4 tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            sint amet facilis culpa dolores nobis asperiores? Tempora
            perspiciatis voluptas ea!
          </p>
          {isLogged ? (
            <div className="flex items-center gap-2">
              <Link className="w-full mt-4" href={"/#packages"}>
                <Button variant={"ghost"} className="font-bold w-full px-8">
                  Umów wizytę
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex-col flex w-full md:w-1/2">
              <span className="mt-4 text-gray-400 font-bold">
                Nieststy nie masz konta załóż je
              </span>
              <LoginButton />
            </div>
          )}
        </div>
        <div className=" w-full flex items-end md:w-1/2">
          <img className="w-full" src="/zdj.png" alt="Zeus" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
