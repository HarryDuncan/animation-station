import React from "react";
import { MosaicGallery } from "@hjd/ui";
import { GalleryContainer } from "../StyledComponents";

export const DigitalArtGallery = () => {
  const items = [
    { title: "Piece One", imageUrl: "t" },
    { title: "Piece 2", imageUrl: "t" },
  ];

  const onCardClick = (index: number) => {
    console.log(index);
  };
  return (
    <GalleryContainer>
      <MosaicGallery items={items} onClickCallback={onCardClick} />
    </GalleryContainer>
  );
};
