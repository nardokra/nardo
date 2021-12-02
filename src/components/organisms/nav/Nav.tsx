import React from "react";

interface INavProps {
  menuItems?: Array<string>;
}

export const Nav = ({ menuItems }: INavProps) => {
  return (
    <nav>
      <ul>
        {menuItems?.map((menuItem, index) => (
          <li key={index}>{menuItem}</li>
        ))}
      </ul>
    </nav>
  );
};
