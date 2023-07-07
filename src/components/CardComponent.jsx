import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { about } from "../utils/Data";

export const CardComponent = () => {
  return (
    <>
      <div className="space-y-[32px]">
        <div className="grid gap-x-[32px] sm:gap-y-[32px] lg:grid-cols-2 sm:grid-cols-1">
          {about
            .filter((item) => item.isBig == false)
            .map((item) => {
              return (
                <Card className="w-full card bg-transparent shadow-none">
                  <CardBody className="text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Typography
                        className="font-main lg:text-h4 sm:text-phone-h4 font-semibold"
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <Typography
                      className="font-main lg:text-body3 sm:text-phone-body3"
                    >
                      {item.desc}
                    </Typography>
                  </CardBody>
                  <CardFooter shadow={false} floated={false} className="w-full h-full">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardFooter>
                </Card>
              );
            })}
        </div>
        <div className="">
          {about
            .filter((item) => item.isBig == true)
            .map((item) => {
              return (
                <Card className="w-full flex lg:flex-row sm:flex-col card bg-transparent shadow-none">
                  <CardBody className="grid content-center text-white">
                    <div className="justify-between mb-2">
                      <Typography
                        className="font-main lg:text-h4 sm:text-phone-h4 font-semibold"
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <Typography
                      variant="small"
                      className="font-main lg:text-body3 sm:text-phone-body3"
                    >
                      {item.desc}
                    </Typography>
                  </CardBody>
                  <CardFooter shadow={false} floated={false} className="w-full h-full">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};
