import React from "react";
import SideBarItem, { ISideBarItem } from "./SideBarItem";

import {
  SideBarLinkList,
  SideBarTitleContainer,
  StyledSideBar,
} from "./NavigationBar.styles";

interface ISideBarProps {
  navItems: ISideBarItem[];
}

const SideBar = ({ navItems }: ISideBarProps) => {
  return (
    <StyledSideBar>
      <SideBarTitleContainer></SideBarTitleContainer>
      <SideBarLinkList>
        <SideBarItemList items={navItems as ISideBarItem[]} />
      </SideBarLinkList>
    </StyledSideBar>
  );
};

const SideBarItemList = ({ items }: { items: ISideBarItem[] }) => {
  return (
    <div>
      {items.map((link) => (
        <SideBarItem {...link} key={link.key} />
      ))}
    </div>
  );
};

export default SideBar;
