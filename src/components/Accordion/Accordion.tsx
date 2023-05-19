import React, { useState } from "react";

function Accordion() {
  const [open, setOpen] = useState(false);
  const toggle = (index)) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      title: "hello",
      desc: "What is Next.Js ?",
    },
    {
      title: "hello",
      desc: "What is Next.Js ?",
    },
    {
      title: "hello",
      desc: "What is Next.Js ?",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {accordionData.map((data, index) => {
        return (
          <AccordionItem
            key={index}
            open={index === open}
            title={data.title}
            desc={data.desc}
            toggle={() => toggle(index)}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
