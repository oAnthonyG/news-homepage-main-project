import { createSystem, defaultConfig } from "@chakra-ui/react";

const config = {
  theme: {
    tokens: {
      colors: {
        brandOrange: { value: "hsl(35, 77%, 62%)" },
        brandRed: { value: "hsl(5, 85%, 63%)" },

        offWhite: { value: "hsl(36, 100%, 99%)" },
        grayBlue: { value: "hsl(233, 8%, 79%)" },
        darkGrayBlue: { value: "hsl(236, 13%, 42%)" },
        veryDarkBlue: { value: "hsl(240, 100%, 5%)" },
      },
    },
    breakpoints: {
      sm: "40em",
      md: "52em",
      lg: "64em",
      xl: "80em",
    },
    semanticTokens: {
      colors: {
        bg: { value: "{colors.offWhite}" },
        textPrimary: { value: "{colors.veryDarkBlue}" },
        textSecondary: { value: "{colors.darkGrayBlue}" },
        textMuted: { value: "{colors.grayBlue}" },
        accent: { value: "{colors.brandOrange}" },
        danger: { value: "{colors.brandRed}" },
      },
    },
  },
};



const system = createSystem(defaultConfig, config);

export default system;