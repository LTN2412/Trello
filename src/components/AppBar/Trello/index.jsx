import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import TrelloIcon from "@/assets/trello.svg?react";
import Typography from "@mui/material/Typography";

export default function Trello() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
      <SvgIcon
        component={TrelloIcon}
        inheritViewBox
        fontSize="large"
        sx={{ color: "text.primary" }}
      />
      <Typography
        variant="span"
        sx={{ color: "text.primary", fontSize: 20, fontWeight: "bolder" }}
      >
        Trello
      </Typography>
    </Box>
  );
}
