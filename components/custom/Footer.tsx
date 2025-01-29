"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setyear] = useState<number>();
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    setyear(year);
  };
  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className="bg-gray-950 w-full flex justify-center items-center min-h-[40vh] md:min-h-[30vh]">
      <div className="text-white w-full lg:w-11/12 xl:w-[60%] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="w-1/4" src="/logo.png" alt="logo" />
          <h4 className="font-bold uppercase">Doktor</h4>
        </div>
        <div className="flex flex-col md:flex-row mt-5 gap-7 justify-center items-center">
          <Link className="font-bold" href={"/#about"}>
            O mnie
          </Link>
          <Link className="font-bold" href={"/#packages"}>
            Pakiety
          </Link>
          <Link className="font-bold" href={"/#contact"}>
            Kontakt
          </Link>
        </div>
        <div>
          <p className="mt-4 text-gray-500">
            copyright {year} &copy; all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
