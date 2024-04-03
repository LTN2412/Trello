import Box from "@mui/material/Box";
function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} -  ${theme.trelloCustom.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      BoardContent
    </Box>
  );
}
export default BoardContent;
