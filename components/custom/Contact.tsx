"use client";
import React, { useRef } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMIALJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMIALJS_TEMPLATE_ID!,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMIALJS_PUBLIC_KEY!,
      }
    );
  };
  return (
    <section
      className="w-full mt-8 h-auto flex justify-center items-center"
      id="contact"
    >
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full">
        <h2 className="text-4xl font-bold">Skontaktuj się ze mną!</h2>
        <div className="mt-4 h-[50rem] md:h-[40rem]  flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/2 p-10 bg-secondary rounded-xl h-full flex flex-col">
            <div>
              <h4 className="flex items-center gap-2 font-bold">
                <FaLocationPin />
                Adres
              </h4>
              <p className="px-6">Lorem ipsum dolor sit.</p>
              <p className="px-6">Lorem ipsum dolor sit.</p>
              <p className="px-6">Lorem ipsum dolor sit.</p>
              <h4 className="flex mt-3 items-center gap-2 font-bold">
                <MdEmail />
                Email
              </h4>
              <p className="px-6">text@gmail.com</p>
              <h4 className="flex mt-3 items-center gap-2 font-bold">
                <FaPhoneAlt />
                Phone
              </h4>
              <p className="px-6">+48 888 888 888</p>
            </div>
            <div className="w-full flex items-end h-full justify-center gap-5">
              <Link
                className="p-4 border rounded-full hover:bg-black hover:text-white transition-all ease-in-out"
                href={"/"}
              >
                <MdEmail size={25} />
              </Link>
              <Link
                className="p-4 border rounded-full hover:bg-black hover:text-white transition-all ease-in-out"
                href={"/"}
              >
                <FaFacebook size={25} />
              </Link>
              <Link
                className="p-4 border rounded-full hover:bg-black hover:text-white transition-all ease-in-out"
                href={"/"}
              >
                <FaYoutube size={25} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="flex flex-col p-4 items-center"
            >
              <div className="flex justify-evenly gap-3 mt-4">
                <div className="flex flex-col gap-2">
                  <label className="font-bold" htmlFor="name">
                    Imie
                  </label>
                  <Input name="user_name" required id="name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold" htmlFor="surname">
                    Nazwisko
                  </label>
                  <Input name="user_surname" required id="surname" />
                </div>
              </div>
              <div className="flex justify-evenly mt-4 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="font-bold" htmlFor="email">
                    Email
                  </label>
                  <Input name="user_email" required id="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold" htmlFor="tel">
                    Numer tel
                  </label>
                  <Input name="user_tel" required type="number" id="tel" />
                </div>
              </div>
              <div className=" w-11/12 mt-4">
                <Textarea name="message" required />
              </div>
              <Button className="font-bold mt-4 w-full" type="submit">
                Wyślij
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
