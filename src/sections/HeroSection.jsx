import { Button } from "@material-tailwind/react";
import React from "react";
import { FilledButton, OutlinedButton } from "../components/ButtonComponent";

export const HeroSection = () => {
  return (
    <section class="hero">
      <div class="grid max-w-screen-xl px-0 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 space-y-12 text-black">
          <h1 class="max-w-2xl mb-4 text-h1 font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
            Discover and collect super rare NFTs
          </h1>
          <p class="max-w-2xl mb-6 font-light text-body1 lg:mb-8 md:text-lg lg:text-xl">
            Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
            discover exclusive digital assets today.
          </p>
          <div className="flex gap-5">
            <FilledButton>Buy</FilledButton>
            <OutlinedButton>Connect Wallet</OutlinedButton>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/NFT.png" className="w-full" />
        </div>
      </div>
    </section>
  );
};