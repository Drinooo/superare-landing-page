import { Typography } from "@material-tailwind/react";
import React from "react";
import { navigation } from "../utils/Data";

const currentYear = new Date().getFullYear();

export const FooterSection = () => {
  return (
    <footer className="w-full footer-bg p-8 text-black pt-[82px]">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-main font-semibold text-textlogo"
        >
          SUPERARE
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-black">
          {navigation.map((item) => (
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-main text-navigation transition-colors hover:text-purple focus:text-purple"
              >
                {item.title}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-black py-4 md:flex-row md:justify-between">
        <Typography
          className="mb-4 font-main text-footer text-black md:mb-0"
        >
          &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/">Superare</a>. All Rights
          Reserved.
        </Typography>
        <div className="flex gap-4 text-black sm:justify-center">
          <Typography
            as="a"
            href="#"
            className="font-main text-footer hover:text-purple focus:text-purple"
          >
            Privacy Policy
          </Typography>
          <Typography
            as="a"
            href="#"
            className="font-main text-footer hover:text-purple focus:text-purple"
          >
            Terms of Services
          </Typography>
          <Typography
            as="a"
            href="#"
            className="font-main text-footer hover:text-purple focus:text-purple"
          >
            Cookies Settings
          </Typography>
        </div>
      </div>
    </footer>
  );
};
