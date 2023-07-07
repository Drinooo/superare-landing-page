import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import {
  FilledButton,
  OutlinedButton,
  WhiteButton,
  WhiteOutlinedButton,
} from "../components/ButtonComponent";

export const CTASection = () => {
  return (
    <div className="container mx-auto">
      <section className="mb-32 text-center">
        <div className=" md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] space-y-8 text-white block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <Typography className="font-main font-semibold lg:text-h2 sm:text-phone-h2 leading-tight tracking-tight">
                    Join the community
                  </Typography>
                  <Typography className="font-main font-regular lg:text-body3 sm:text-phone-body3 leading-tight tracking-tight">
                    Join our Discord channel or follow us on Twitter keep up to
                    date with our latest work and announcements.
                  </Typography>
                  <div className="space-x-5 flex justify-center">
                    <WhiteButton>Join Discord</WhiteButton>
                    <WhiteOutlinedButton>Follow Twitter</WhiteOutlinedButton>
                  </div>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src="/images/monkey.jpg"
                  className="lg:rotate-[3deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
