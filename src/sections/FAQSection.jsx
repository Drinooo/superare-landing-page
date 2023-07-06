import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { PlusIcon } from "../utils/Icons";
import { questions } from "../utils/Data";

export const FAQSection = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <Typography className="mb-6 text-h3 font-main font-medium">
              Your questions, answered.
            </Typography>
          </div>

          <div className="mb-6 md:mb-0 space-y-[16px]">
            {questions.map((item) => (
              <Accordion
                open={open === item.id}
                icon={<PlusIcon id={item.id} open={open} />}
                className="border border-blue-gray-100 px-4 rounded-xl mb-2"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="font-main text-body3 border-b-0"
                >
                  {item.title}
                </AccordionHeader>
                <AccordionBody className="font-main text-body3">
                  {item.ans}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
