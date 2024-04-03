import lightGreen from "@mui/material/colors/lightGreen";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "60px",
    boardBarHeight: "80px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: lightGreen,
      },
    },
    dark: {
      palette: {},
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "None",
          fontWeight: "bolder",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: 16,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
          };
        },
      },
    },
  },
});
export default theme;
