import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubICon from "@mui/icons-material/GitHub";
import SvgIcon from "@mui/material/SvgIcon";
import GoogleIcon from "@/assets/google-svg.svg?react";

export default function OAuthLogin() {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 3 }}
    >
      <Button
        variant="contained"
        sx={{
          width: "180px",
          height: "60px",
          gap: 1,
          border: 1,
          borderRadius: 3,
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "black",
            opacity: "0.7",
          },
        }}
      >
        <GitHubICon sx={{ fontSize: 25, color: "white" }} />
        <Typography
          sx={{
            fontSize: 15,
            color: "white",
          }}
        >
          Github
        </Typography>
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "180px",
          height: "60px",
          color: "black",
          gap: 1,
          backgroundColor: "white",
          border: 1,
          borderRadius: 3,
          ":hover": {
            backgroundColor: "white",
            opacity: 0.8,
          },
        }}
      >
        <SvgIcon component={GoogleIcon} inheritViewBox sx={{ fontSize: 25 }} />
        <Typography sx={{ fontSize: 15, textTransform: "capitalize" }}>
          Google
        </Typography>
      </Button>
    </Box>
  );
}
