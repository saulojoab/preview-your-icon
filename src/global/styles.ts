import { createGlobalStyle } from "styled-components";
import SFProDisplayBlack from "@/assets/fonts/SF-Pro-Display-Black.otf";
import SFProDisplayBlackltalic from "@/assets/fonts/SF-Pro-Display-BlackItalic.otf";
import SFProDisplayBold from "@/assets/fonts/SF-Pro-Display-Bold.otf";
import SFProDisplayBoldItalic from "@/assets/fonts/SF-Pro-Display-BoldItalic.otf";
import SFProDisplayHeavy from "@/assets/fonts/SF-Pro-Display-Heavy.otf";
import SFProDisplayHeavyltalic from "@/assets/fonts/SF-Pro-Display-HeavyItalic.otf";
import SFProDisplayLight from "@/assets/fonts/SF-Pro-Display-Light.otf";
import SFProDisplayLightitalic from "@/assets/fonts/SF-Pro-Display-LightItalic.otf";
import SFProDisplayMedium from "@/assets/fonts/SF-Pro-Display-Medium.otf";
import SFProDisplayMediumItalic from "@/assets/fonts/SF-Pro-Display-MediumItalic.otf";
import SFProDisplayRegular from "@/assets/fonts/SF-Pro-Display-Regular.otf";
import SFProDisplayRegularltalic from "@/assets/fonts/SF-Pro-Display-RegularItalic.otf";
import SFProDisplaySemibold from "@/assets/fonts/SF-Pro-Display-Semibold.otf";
import SFProDisplaySemiboldItalic from "@/assets/fonts/SF-Pro-Display-SemiboldItalic.otf";
import SFProDisplayThin from "@/assets/fonts/SF-Pro-Display-Thin.otf";
import SFProDisplayThinltalic from "@/assets/fonts/SF-Pro-Display-ThinItalic.otf";
import SFProDisplayUltralight from "@/assets/fonts/SF-Pro-Display-Ultralight.otf";
import SFProDisplayUltralightitalic from "@/assets/fonts/SF-Pro-Display-UltralightItalic.otf";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app, #app>div, #root {
  height: 100%
}

  @font-face {
  font-family: 'SFProDisplayBlack';
  src: url(${SFProDisplayBlack}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayBlackltalic';
  src: url(${SFProDisplayBlackltalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayBold';
  src: url(${SFProDisplayBold}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayBoldItalic';
  src: url(${SFProDisplayBoldItalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayHeavy';
  src: url(${SFProDisplayHeavy}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayHeavyltalic';
  src: url(${SFProDisplayHeavyltalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayLight';
  src: url(${SFProDisplayLight}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayLightitalic';
  src: url(${SFProDisplayLightitalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayMedium';
  src: url(${SFProDisplayMedium}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayMediumItalic';
  src: url(${SFProDisplayMediumItalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayRegular';
  src: url(${SFProDisplayRegular}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayRegularltalic';
  src: url(${SFProDisplayRegularltalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplaySemibold';
  src: url(${SFProDisplaySemibold}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplaySemiboldItalic';
  src: url(${SFProDisplaySemiboldItalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayThin';
  src: url(${SFProDisplayThin}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayThinltalic';
  src: url(${SFProDisplayThinltalic}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayUltralight';
  src: url(${SFProDisplayUltralight}) format('opentype');
}

@font-face {
  font-family: 'SFProDisplayUltralightitalic';
  src: url(${SFProDisplayUltralightitalic}) format('opentype');
}
`;

export default Global;
