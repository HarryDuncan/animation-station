import React from "react";
import { AnimationWidget } from "../../components/animation-widget/AnimationWidget";
import { PageTitle } from "../../components/page-text";
import { LandingContainer } from "./StyledComponents";

export const Landing = () => {
  const landingScene = { title: "Landing", name: "Landing", assetUrls: {} };

  return (
    <LandingContainer>
      <PageTitle>Welcome To GLO</PageTitle>
      <AnimationWidget scenes={[landingScene]} />
    </LandingContainer>
  );
};
