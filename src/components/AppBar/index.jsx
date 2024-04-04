import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import Trello from "../AppBar/Trello";
import WorkSpace from "../AppBar/Menus/Workspaces";
import Recent from "../AppBar/Menus/Recent";
import Starred from "../AppBar/Menus/Starred";
import Templates from "../AppBar/Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Notifications from "../Notifications";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import Profile from "./Menus/Profile";

export default function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon fontSize="large" sx={{ color: "primary.main" }} />
        <Trello />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
        </Box>
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField label="Seacrch..." size="small" />
          <ModeSelect />
        </Box>
        <Notifications />
        <Tooltip title="Help" sx={{ cursor: "pointer" }}>
          <HelpIcon sx={{ color: "primary.main" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}
