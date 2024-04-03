import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import TrelloIcon from "~/assets/trello.svg?react";
import Typography from "@mui/material/Typography";
export default function Trello() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <SvgIcon
        component={TrelloIcon}
        inheritViewBox
        fontSize="large"
        sx={{ color: "primary.main" }}
      />
      <Typography
        variant="span"
        sx={{ color: "primary.main", fontSize: 20, fontWeight: "bolder" }}
      >
        Trello
      </Typography>
    </Box>
  );
}
