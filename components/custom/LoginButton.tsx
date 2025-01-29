"use client";
import React from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );

      console.log(userInfo.data);
      const user = userInfo.data;
      const name = user.name.toLowerCase();
      localStorage.setItem("user", JSON.stringify(user));
      await axios
        .post("/api/add-user", {
          name: name,
          email: user.email,
          picture: user.picture,
        })
        .then(() => {
          window.location.reload();
        });
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <Button
      onClick={() => googleLogin()}
      className=" w-full md:w-auto px-15 md:px-10 py-6 md:py-4 font-bold"
    >
      Zaloguj się
    </Button>
  );
};

export default LoginButton;
