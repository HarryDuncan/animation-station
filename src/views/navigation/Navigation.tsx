import React, { useMemo } from "react";
import SideBar from "./SideBar";

export const Navigation = () => {
  // get defaultItems =
  const getNavItems = () => {
    return useMemo(
      () => [
        {
          key: "digital-art",
          title: "Digital Art",
          link: "digital-art",
        },
        {
          key: "sandbox",
          title: "Sandbox",
          link: "sandbox",
        },
      ],
      []
    );
  };

  const navItems = getNavItems();

  return <SideBar navItems={navItems} />;
};
