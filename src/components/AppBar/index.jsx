import Box from "@mui/material/Box";
import ModeSelect from "../ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import Trello from "../AppBar/Trello";
import WorkSpace from "../AppBar/Menus/Workspaces";
import Recent from "../AppBar/Menus/Recent";
import Starred from "../AppBar/Menus/Starred";
import Templates from "../AppBar/Menus/Templates";
import Button from "@mui/material/Button";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
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
        backgroundColor: "primary.main",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon fontSize="large" sx={{ color: "text.primary" }} />
        <Trello />
        <Box sx={{ display: "flex" }}>
          <WorkSpace />
          <Recent />
          <Starred />
          <Templates />
        </Box>
        <Button
          variant="text"
          startIcon={<LibraryAddIcon />}
          sx={{
            color: "text.primary",
            "&:hover": {},
          }}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          label="Seacrch"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />
        <ModeSelect />
        <Notifications />
        <Tooltip title="Help" sx={{ cursor: "pointer" }}>
          <HelpIcon sx={{ color: "primary.main" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}
