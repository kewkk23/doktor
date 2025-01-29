"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "Konsultacja",
  });
  const [visit, setVisit] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/check", {
        name: formData.name.toLowerCase(),
        email: formData.email,
        product: formData.product,
      })
      .then((res) => {
        setVisit(res.data.message);
      });
  };

  return (
    <main className="w-full min-h-[70vh] mt-5 flex justify-center items-center">
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col md:flex-row md:justify-between items-center gap-4">
        <div className="py-20 w-full md:w-1/2 ">
          <h3 className="text-2xl font-bold">Sprawdź swoją wizytę</h3>
          <form onSubmit={sendForm} className="flex flex-col gap-2">
            <label className="font-bold" htmlFor="name">
              Imie i nazwisko
            </label>
            <Input
              name="name"
              required
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              required
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="font-bold" htmlFor="opt">
              Wybierz swoją nazwę produktu
            </label>
            <select
              name="product"
              id="opt"
              value={formData.product}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            >
              <option value="Konsultacja">Konsultacja</option>
              <option value="Operacja">Operacja</option>
              <option value="Zabieg">Zabieg</option>
            </select>
            <Button className="font-bold" type="submit">
              Sprawdź
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          {Object.keys(visit).length > 0 && (
            <div className="w-full h-[30rem] bg-secondary p-4 rounded-xl">
              <h3 className=" capitalize font-bold my-2">
                Imie i nazwisko: {visit.name}
              </h3>
              <p className="font-bold my-2">Id płatności: {visit.pay_id}</p>
              <p className="font-bold my-2">Email: {visit.email}</p>
              <p className="font-bold my-2">
                {visit.pay_verified == false ? (
                  <span className="text-red-500">
                    Płatność nie zweryfikowana
                  </span>
                ) : (
                  <span className="text-primary">Płatność zweryfikowana</span>
                )}
              </p>
              <p className="font-bold my-2">
                Nazwa produktu: {visit.product_name}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default page;
