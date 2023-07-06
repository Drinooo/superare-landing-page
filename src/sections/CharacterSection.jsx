import React from "react";
import { characters } from "../utils/Data";
import { Typography } from "@material-tailwind/react";

export const CharacterSection = () => {
  return (
    <div className="text-center text-white">
      <Typography className="font-main font-semibold text-h3">Find your favourite character</Typography>
      <div className="carousel carousel-center rounded-box max-w-full p-4 space-x-4">
        {characters.map((item) => (
          <div className="carousel-item">
            <a href="#">
              <img src={item.img} alt="" className="rounded-xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
