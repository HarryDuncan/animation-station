import React from "react";
import { AnimationWidget } from "../../../components/animation-widget/AnimationWidget";
import { useDigitalArtContext } from "../context/useDigitalArtContext";
import { useFormatScene } from "./useFormatScene";
import { ViewPieceContainer, ViewPieceHeader } from "./ViewPiece.styles";

export const ViewPiece = () => {
  const { selectedToViewIndex, pieces } = useDigitalArtContext();
  const selectedPiece = pieces[selectedToViewIndex];
  const scene = useFormatScene(selectedToViewIndex, pieces);

  return (
    <ViewPieceContainer>
      <ViewPieceHeader>{selectedPiece.title} </ViewPieceHeader>
      <AnimationWidget scenes={[scene]} />
    </ViewPieceContainer>
  );
};
