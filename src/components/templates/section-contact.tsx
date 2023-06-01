import React from "react";
import Logo from "../atoms/logo";
import copytext from "@/copytext/home.copy.json";
import SVG from "react-inlinesvg";
import { ABOUTLIST, CONTACT, FOODCATEGORIES, SOCIALMEDIA } from "@/utils/constant";
import Link from "next/link";
import InputGroup from "../molecules/input-group";

const SectionContact = () => {
  return (
    <section className="px-5 md:px-10 lg:px-[120px] md:mt-44 overflow-x-hidden">
      <div className="flex gap-10 md:gap-[100px] flex-col md:flex-wrap lg:flex-nowrap md:flex-row justify-between rounded-[20px] bg-olivegreen-lighter p-5  md:p-8 md:px-10  lg:p-10 lg:px-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Logo src="/logo.png" />
            <p className="text-sm text-secondary">
              {copytext.footer.contact.address}
            </p>
          </div>
          <div className="flex gap-2">
            {SOCIALMEDIA.map(({ icon, href }, i) => (
              <Link
                href={href}
                className="rounded-full w-10 h-10 aspect-square flex items-center justify-center hover:bg-olivegreen text-olivegreen hover:text-white"
                key={i}
              >
                <SVG src={icon} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h5 className="text-title-sm">Categories</h5>
          <ul className="flex flex-col gap-5">
            {FOODCATEGORIES.map((name, index) => (
              <li key={index} className="text-sm text-secondary">
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 flex-shrink-0">
          <h5 className="text-title-sm">About Us</h5>
          <ul className="flex flex-col gap-5">
            {ABOUTLIST.map((name, index) => (
              <li key={index} className="text-sm text-secondary">
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <h5 className="text-title-sm">Newsletter</h5>
          <div className="flex flex-col gap-5">
            <p className="text-sm text-secondary">
              {copytext.footer.newsletter.description}
            </p>
            <InputGroup
              label={copytext.footer.newsletter.actions.label}
              placeholder={copytext.footer.newsletter.actions.placeholder}
              onClick={() => {
                alert("Email has send");
              }}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-1 items-center">
                <SVG src="/assets/icons/flat/mail.svg" className="text-olivegreen" /> 
                <p className="text-sm">{CONTACT.email}</p>
            </div>
            <div className="flex gap-1 items-center">
                <SVG src="/assets/icons/flat/phone.svg" className="text-olivegreen" /> 
                <p className="text-sm">{CONTACT.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
