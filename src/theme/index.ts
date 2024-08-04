"use client";
import { createTheme } from "@mui/material/styles";
import { colorConstants } from "./colorConstants";

declare module "@mui/material/styles" {
  interface Theme {
    colorConstants: {
      bgColorLightGray: string;
      primaryBlue?: string;
      primaryDarkBlue?: string;
      darkBlue?: string;
      brown?: string;
      white?: string;
      bgLightBlue?: string;
      royalBlue?: string;
      visibleGray?: string;
      visibleDarkGray?: string;
      softRed?: string;
      lightRoyalBlue?: string;
      purple?: string;
      bluishBlack?: string;
      bluishPurple?: string;
      snowPink?: string;
      black?: string;
      green?: string;
      cyan?: string;
      midnightBlue?: string;
      grey?: string;
      lightGrey?: string;
      lightGreen?: string;
      greyBg?: string;
      doneGreen?: string;
      crossRed?: string;
      darkGray?: string;
      bgBluishGray?: string;
      mediumGray?: string;
      whitishGray?: string;
      borderColor?: string;
      lightPurple?: string;
      fadedBlue?: string;
      borderedGray?: string;
      weakRed?: string;
      discountGreen?: string;
      lightGreenBackground?: string;
      linkBlue?: string;
      purplishBlue?: string;
      opacedBlue?: string;
      silverGray?: string;
      darkBluishBlack?: string;
      orange?: string;
      backGray?: string;
      opacedBlueDark?: string;
      fadedPurple?: string;
      buttonPurple?: string;
      backgroundPurple?: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colorConstants?: {
      bgColorLightGray?: string;
      primaryBlue?: string;
      primaryDarkBlue?: string;
      darkBlue?: string;
      white?: string;
      bgLightBlue?: string;
      royalBlue?: string;
      lightRoyalBlue?: string;
      purple?: string;
      bluishBlack?: string;
      bluishPurple?: string;
      snowPink?: string;
      black?: string;
      green?: string;
      cyan?: string;
      midnightBlue?: string;
      grey?: string;
      lightGrey?: string;
      lightGreen?: string;
      greyBg?: string;
      doneGreen?: string;
      crossRed?: string;
      lightPurple?: string;
      darkGray?: string;
      bgBluishGray?: string;
      whitishGray?: string;
      mediumGray?: string;
      borderColor?: string;
      fadedBlue?: string;
      visibleGray?: string;
      softRed?: string;
      brown?: string;
      visibleDarkGray?: string;
      borderedGray?: string;
      weakRed?: string;
      discountGreen?: string;
      lightGreenBackground?: string;
      linkBlue?: string;
      purplishBlue?: string;
      opacedBlue?: string;
      silverGray?: string;
      darkBluishBlack?: string;
      orange?: string;
      backGray?: string;
      opacedBlueDark?: string;
      fadedPurple?: string;
      buttonPurple?: string;
      backgroundPurple?: string;
    };
  }
}

declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    button16?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button16: true;
  }
}
const theme = createTheme({
  palette: {},
});

export default theme;
