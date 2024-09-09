import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70vw",
          height: "80vh",
          backgroundColor: (theme) =>
            theme.palette.mode == "light" ? "white" : "#2c3e50",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
