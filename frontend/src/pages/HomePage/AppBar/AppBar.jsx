import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Trello from "@/components/AppBar/Trello/Trello";
import Menu from "@/components/AppBar/Menu/Menu";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useNavigate } from "react-router-dom";

export default function AppBarHomePage() {
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();
  const toggleChangeMode = () => {
    mode == "light" ? setMode("dark") : setMode("light");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        backgroundColor: "primary.main",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}>
        <Trello />
        <Menu title={"Features"} />
        <Menu title={"Solutions"} />
        <Menu title={"Plans"} />
        <Button sx={{ color: "text.primary" }}>Pricing</Button>
        <Menu title={"Resources"} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 2 }}>
        <Button
          onClick={toggleChangeMode}
          sx={{
            color: (theme) =>
              theme.palette.mode == "light" ? "#f1c40f" : "#7f8c8d",
          }}
        >
          {mode == "light" ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
        </Button>
        <Button
          sx={{ color: "text.primary" }}
          onClick={() => navigate("/auth/signin")}
        >
          Login
        </Button>
        <Button sx={{ color: "text.primary" }}>Get Trello for free</Button>
      </Box>
    </Box>
  );
}
