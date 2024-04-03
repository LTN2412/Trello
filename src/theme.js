import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "60px",
    boardBarHeight: "80px",
  },
  colorSchemes: {
    light: {
      palette: {},
    },
    dark: {
      palette: {},
    },
  },
});
export default theme;
