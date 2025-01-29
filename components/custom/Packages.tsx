"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LoginButton from "./LoginButton";
import { packages } from "./packagesList";

const Packages = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const checkUser = () => {
    const puser = localStorage.getItem("user");
    if (puser) {
      setIsLogged(true);
      const user = JSON.parse(puser);
      setUserEmail(user.email);
    } else {
      setIsLogged(false);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <section
      id="packages"
      className="w-full mt-6 h-auto flex justify-center items-center"
    >
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full">
        <div className="w-full h-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              className="shadow-lg flex flex-col items-center gap-3 p-3 rounded-lg h-auto hover:shadow-primary transition-shadow ease-in-out"
              key={item.id}
            >
              <h2 className="text-center text-3xl mt-3 font-extrabold">
                {item.name}
              </h2>
              <p className="mt-3 text-xl text-center">
                {<item.icon size={50} />}
              </p>
              <p className="mt-2 text-lg -tracking-tighter text-center">
                {item.desc}
              </p>
              <p className="text-primary font-semibold text-lg">
                {item.price} PLN
              </p>
              {isLogged ? (
                <Link
                  target="_blank"
                  className="w-full mt-4"
                  href={`${item.buy}?prefilled_email=${userEmail}`}
                >
                  <Button variant={"outline"} className="w-full font-bold">
                    Kup teraz
                  </Button>
                </Link>
              ) : (
                <LoginButton />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
