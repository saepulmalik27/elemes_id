import React from "react";
import Logo from "../atoms/logo";
import copytext from "@/copytext/home.copy.json";
const Footer = () => {
  return (
    <footer className="flex gap-[100px] flex-col md:flex-row justify-between rounded-[20px] bg-olivegreen-lighter p-10 px-4 md:px-[120px]">
        <div className="flex flex-col gap-2">
            <Logo src="/logo.png" />
            <p className="text-sm">{copytext.footer.contact.address}</p>
        </div>
        <div className="flex flex-col gap-2">
            <h5 className="text-title-sm">Categories</h5>
            <ul>
                
            </ul>
        </div>   
        <div className="flex flex-col gap-2">
            <h5 className="text-title-sm">About Us</h5>
            <ul>
                
            </ul>
        </div>
        <div className="flex flex-col gap-2">
            <h5 className="text-title-sm">Newsletter</h5>
            <p className="text-sm">{copytext.footer.newsletter.description}</p>
        </div>   
    </footer>
  );
};

export default Footer;
