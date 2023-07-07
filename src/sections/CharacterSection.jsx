import React from "react";
import { characters } from "../utils/Data";
import { Typography } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";

export const CharacterSection = () => {
  return (
    <div className="text-center text-white py-[100px] sm:py-[40px] space-y-10">
      <Typography className="font-main font-semibold lg:text-h3 sm:text-phone-h3">
        Find your favourite character
      </Typography>
      {/* <Marquee autoFill speed={150}> */}
        <div className="carousel carousel-center rounded-box max-w-full space-x-4">
          {characters.map((item) => (
            <div className="carousel-item">
              <a href="#">
                <img src={item.img} alt="" className="rounded-xl" />
              </a>
            </div>
          ))}
        </div>
      {/* </Marquee> */}
    </div>
  );
};
