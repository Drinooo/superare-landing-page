import { Typography } from "@material-tailwind/react";
import React from "react";
import { navigation } from "../utils/Data";

const NavbarList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {navigation.map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="font-main text-navigation font-light"
        >
          <a
            href={item.path}
            className="flex items-center hover:text-purple transition-colors"
          >
            {item.title}
          </a>
        </Typography>
      ))}
    </ul>
  );
};

export default NavbarList;
