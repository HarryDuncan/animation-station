import { DefaultTheme } from "styled-components";

export type Theme = typeof THEME;

export const SPACING_UNIT = 8;

export const THEME: DefaultTheme = {
  spacing: (multiple = 1) => SPACING_UNIT * multiple,
  colors: {
    mono: {
      ui01: "#171719",
      ui02: "#202123",
      ui03: "#262a2d",
      ui04: "#373d43",
      ui05: "#5a6872",
      ui06: "#c6cdd2",
      text01: "#fff",
      text02: "#c6cdd2",
      text03: "#98a5ae",
    },

    brand: {
      brand01: "#0081a1",
      brand02: "#59cbe8",
    },
  },
  font: {
    default: {
      family: "AnimationS",
      weight: {
        light: 200,
        normal: 400,
        bold: 700,
      },
    },
    alternative: {
      family: '"Source Sans Pro", monospace',
    },
  },
};
