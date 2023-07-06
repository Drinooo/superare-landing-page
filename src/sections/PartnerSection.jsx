import { Typography } from "@material-tailwind/react";
import React from "react";
import { partners } from "../utils/Data";

export const PartnerSection = () => {
  return (
    <div className="mx-auto">
      <div className="grid justify-items-center gap-y-6 gap-x-12 text-center pb-10">
        <Typography className="font-main font-semibold text-h6">Partners</Typography>
      </div>
      <div className="flex flex-wrap flex-row justify-between gap-y-8">
        {partners.map((item, index) => (
          <div key={index}>
            <img src={item.img} className="lg:w-full sm:w-24" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
