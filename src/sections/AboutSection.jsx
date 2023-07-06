import { Typography } from "@material-tailwind/react";
import React from "react";
import { CardComponent } from "../components/CardComponent";

export const AboutSection = () => {
  return (
    <div className="container mx-auto">
      <section className="">
        <div className="grid gap-y-[100px]">
          <div className="max-w-full flex flex-row justify-between gap-x-[30px] text-white">
            <Typography className="font-main text-h5 font-bold tracking-tight">
              A new wave of collectibles is about to hit the blockchain.
            </Typography>
            <Typography className="font-main text-body2">
            Characterised by soft lighting, vintage colour schemes and quirky costumes, these generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.
            </Typography>
          </div>
          <CardComponent />
        </div>
      </section>
    </div>
  );
};
