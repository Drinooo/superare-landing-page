import { Typography } from "@material-tailwind/react";
import React from "react";
import { partners } from "../utils/Data";
import Marquee from "react-fast-marquee";

export const PartnerSection = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-[33px] lg:py-[180px] sm:py-[40px]">
      <div className="grid justify-items-center text-center text-white">
        <Typography className="font-main font-bold text-h6">
          Partners
        </Typography>
      </div>
      <div className="flex flex-wrap flex-row justify-between">
      <Marquee autoFill="true">
        {partners.map((item, index) => (
          <div key={index}>
            <img src={item.img} className="lg:w-full sm:w-28" alt="" />
          </div>
        ))}
        </Marquee>
      </div>
    </div>
  );
};
