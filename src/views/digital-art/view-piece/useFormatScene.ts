import { IPiece } from "../context/Context";

export const useFormatScene = (index: number, pieces: IPiece[]) => {
  console.log(pieces);

  const selectedPiece = pieces[index];
  const { sceneName, assets } = selectedPiece;
  return {
    name: sceneName,
    assetUrls: assets,
  };
};
