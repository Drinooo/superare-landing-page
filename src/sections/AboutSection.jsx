import { Typography } from "@material-tailwind/react";
import React from "react";
import { CardComponent } from "../components/CardComponent";

export const AboutSection = () => {
  return (
    <div className="container mx-auto lg:py-[100px] sm:py-[40px]">
      <section className="">
        <div className="grid lg:gap-y-[100px] sm:gap-y-[50px]">
          <div className="max-w-full flex lg:flex-row sm:flex-col justify-between gap-x-[30px] text-white">
            <Typography className="font-main font-bold tracking-tight lg:text-h5 sm:text-phone-h5">
              A new wave of collectibles is about to hit the blockchain.
            </Typography>
            <Typography className="font-main lg:text-body2 sm:text-phone-body2">
            Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.
            </Typography>
          </div>
          <CardComponent />
        </div>
      </section>
    </div>
  );
};
