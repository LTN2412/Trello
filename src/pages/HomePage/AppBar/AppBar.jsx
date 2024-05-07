import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Trello from "@/components/AppBar/Trello/Trello";
import Menu from "@/components/AppBar/Menu/Menu";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function AppBarHomePage() {
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
        <Button sx={{ color: "white" }}>Pricing</Button>
        <Menu title={"Resources"} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 2 }}>
        <Button onClick={toggleChangeMode} sx={{ color: "red" }}>
          {mode == "light" ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
        </Button>
        <Button sx={{ color: "white" }}>Login</Button>
        <Button sx={{ color: "white" }}>Get Trello for free</Button>
      </Box>
    </Box>
  );
}
