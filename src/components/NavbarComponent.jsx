import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarList from "./NavbarList";

export const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar className="mx-auto max-w-full shadow-none border-none bg-transparent backdrop-saturate-100 backdrop-blur-none -mb-[100px] z-50 sticky top-0">
      <div className="flex items-center justify-between text-black max-w-screen-xl mx-auto">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-main font-semibold text-textlogo"
        >
          SUPERARE
        </Typography>
        <div className="hidden lg:block">
          <NavbarList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavbarList />
      </Collapse>
    </Navbar>
  );
};
