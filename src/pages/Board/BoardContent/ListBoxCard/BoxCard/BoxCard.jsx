import Box from "@mui/material/Box";
import BoxCardHeader from "./BoxCardHeader/BoxCardHeader";
import BoxCardFooter from "./BoxCardFooter/BoxCardFooter";
import BoxCardBody from "./BoxCardBody/BoxCardBody";

export default function BoxCard({ column }) {
  return (
    <Box
      sx={{
        width: "300px",
        height: "fit-content",
        maxHeight: (theme) =>
          `calc( ${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
            5
          )} )`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "primary.dark",
        borderRadius: "10px",
        p: "0 10px",
        m: "0 10px",
      }}
    >
      <BoxCardHeader columnTitle={column?.title} />
      <BoxCardBody cards={column?.cards} />
      <BoxCardFooter columnId={column?._id} />
    </Box>
  );
}
