import React from "react";
import Collapse from 'react-collapse';
interface AccordionProps {
  title: string;
  desc: string;
  open: any;
  toggle: any;
}
const AccordionUI: React.FC<AccordionProps> = ({
  open,
  toggle,
  title,
  desc,
}) => {
  return (
    <>
      <div className="pt-[10px]">
        <div
          className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
          onClick={toggle}
        >
          <p className="text-[22px]">{title}</p>
          <div className="text=[30px]">{open}</div>
        </div>
				<Collapse isOpened={open}><div className="bg-white px-[50px] pb-[20px]">{desc}</Collapse>
      </div>
    </>
  );
};

export default AccordionUI;
