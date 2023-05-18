import { MenuItemProps } from "@/common/types/MenuItemrops";
import React from "react";

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="
	px-4 
	py-3 
	hover:bg-neutral-100 
	transition
	font-semibold
"
    >
      {label}
    </div>
  );
};

export default MenuItem;
