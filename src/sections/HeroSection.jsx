import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { FilledButton, OutlinedButton } from "../components/ButtonComponent";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="grid container px-0 py-28 mx-auto lg:gap-8 xl:gap-0 lg:py-44 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 space-y-12 sm:space-y-6 text-black">
          <Typography className="max-w-2xl font-main font-semibold tracking-tight leading-none lg:text-h1 sm:text-phone-h1">
            Discover and collect super rare NFTs
          </Typography>
          <p className="max-w-2xl mb-6 font-main font-extralight lg:text-body1 sm:text-phone-body1 lg:mb-8">
            Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
            discover exclusive digital assets today.
          </p>
          <div className="flex gap-5">
            <FilledButton>Buy</FilledButton>
            <OutlinedButton>Connect Wallet</OutlinedButton>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/pxfuel.jpeg" className="w-full shadow-lg dark:shadow-black/20 rounded-[25px]" />
        </div>
      </div>
    </section>
  );
};