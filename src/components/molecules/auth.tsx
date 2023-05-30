import React from "react";
import copytext from "@/copytext/home.copy.json";
import Button from "../atoms/button";

const Auth = () => {
  return (
    <div className="flex gap-2">
      <div className="hidden md:block">
        <Button>{copytext.header.auth.signin}</Button>
      </div>

      <Button variant="primary">{copytext.header.auth.signup}</Button>
    </div>
  );
};

export default Auth;
