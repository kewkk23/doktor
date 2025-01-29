"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const router = useRouter();
  const checkUser = () => {
    const puser = localStorage.getItem("user");
    if (puser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      router.push("/");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return <div>{isLogged ? children : ""}</div>;
};

export default Layout;
