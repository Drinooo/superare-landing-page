import { Typography } from "@material-tailwind/react";
import React from "react";
import { partners } from "../utils/Data";

export const PartnerSection = () => {
  return (
    <div className="mx-auto flex flex-col gap-y-[33px] py-[80px]">
      <div className="grid justify-items-center text-center">
        <Typography className="font-main font-bold text-h6">Partners</Typography>
      </div>
      <div className="flex flex-wrap flex-row justify-between">
        {partners.map((item, index) => (
          <div key={index}>
            <img src={item.img} className="lg:w-full sm:w-24" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
