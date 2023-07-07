import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FilledButton, OutlinedButton, WhiteButton, WhiteOutlinedButton } from "../components/ButtonComponent";

export const CTASection = () => {
  return (
    <div className="container mx-auto">
      <section className="text-center lg:text-left">
        <div className="">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
            <div className="mb-12 lg:mb-0 text-white">
              <Typography className="my-12 font-main font-semibold lg:text-h2 sm:text-phone-h2 leading-tight tracking-tight">
                Join the community
              </Typography>
              <Typography className="my-12 font-main font-regular lg:text-body3 sm:text-phone-body3 leading-tight tracking-tight">
                Join our Discord channel or follow us on Twitter keep up to date
                with our latest work and announcements.
              </Typography>
              <div className="flex gap-5">
                <WhiteButton>Join Discord</WhiteButton>
                <WhiteOutlinedButton>Follow Twitter</WhiteOutlinedButton>
              </div>
            </div>

            <div className="">
              <img
                src="/images/CTAImg.png"
                class="w-full h-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
