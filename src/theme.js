import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "60px";
const BOARD_BAR_HEIGHT = "80px";
const BOARD_CONTENT_HEIGHT = `calc( 100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`;

const CARD_WIDTH = "270px";
const CARD_HEADER_HEIGHT = "60px";
const CARD_FOOTER_HEIGHT = "60px";
const CARD_CONTENT_HEIGHT = `calc( ${BOARD_CONTENT_HEIGHT} - ${CARD_HEADER_HEIGHT} - ${CARD_FOOTER_HEIGHT} )`;

const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    card: {
      cardWidth: CARD_WIDTH,
      cardHeaderHeight: CARD_HEADER_HEIGHT,
      cardFooterHeight: CARD_FOOTER_HEIGHT,
      cardContentHeight: CARD_CONTENT_HEIGHT,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#3498db",
        },
        secondary: {
          main: "#3498db",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#101204",
          light: "#2c3e50",
        },
        secondary: {
          main: "#ecf0f1",
        },
        text: {
          primary: "#9fadbc",
          secondary: "white",
        },
        typography: {
          fontSize: "140px",
        },
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#95a5a6",
            borderRadius: "10px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bdc3c7",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         textTransform: "None",
  //         fontWeight: "bolder",
  //       },
  //     },
  //   },
  //   MuiInputLabel: {
  //     styleOverrides: {
  //       root: ({ theme }) => ({
  //         color: "white",
  //         fontSize: 16,
  //       }),
  //     },
  //   },
  // MuiOutlinedInput: {
  //   styleOverrides: {
  //     root: ({ theme }) => {
  //       return {
  //         color: theme.palette.primary.main,
  //         ".MuiOutlinedInput-notchedOutline": {
  //           borderColor: theme.palette.primary.main,
  //         },
  //         "&:hover": {
  //           ".MuiOutlinedInput-notchedOutline": {
  //             borderColor: theme.palette.primary.main,
  //           },
  //         },
  //       };
  //     },
  //   },
  // },
});
export default theme;
