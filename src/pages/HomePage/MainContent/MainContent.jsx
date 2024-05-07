import Box from "@mui/material/Box";
import TextBlock from "./TextBlock/TextBlock";
import ImageBlock from "./ImageBlock/ImageBlock";

export default function MainContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) =>
          `calc( 100vh - ${theme.trelloCustom.appBarHeight} ) `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% )",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <TextBlock />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ImageBlock />
      </Box>
    </Box>
  );
}
