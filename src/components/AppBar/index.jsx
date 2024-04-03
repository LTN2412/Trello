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
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Trello />
        <WorkSpace />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField placeholder="Seacrch..." size="small" />
        <ModeSelect />
        <Notifications />
        <Tooltip title="Help" sx={{ cursor: "pointer" }}>
          <HelpIcon />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}
