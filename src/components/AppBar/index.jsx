import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";
function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}
export default AppBar;
