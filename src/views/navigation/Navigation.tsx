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
      ],
      []
    );
  };

  const navItems = getNavItems();

  return <SideBar navItems={navItems} />;
};
