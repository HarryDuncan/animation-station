import styled from "styled-components";
import { SIDE_BAR_WIDTH } from "../navigation/NavigationBar.styles";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mono.ui06};
  padding-left: ${SIDE_BAR_WIDTH};
`;

export const DigitalArtHeader = styled.div`
  display: flex;
  margin: 0 auto;
`;
export const GalleryContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;