import createGlobalStyle, { css } from "styled-components/macro";
import { SIDE_BAR_WIDTH } from "app/views/components/navigation-bar/NavigationBar.styles";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme: { font } }) => font.default.family};
  }
  
  ${() => scrollbarStyles};

`;

const scrollbarStyles = css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.mono.ui05};
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
