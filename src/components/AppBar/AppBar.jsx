import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ModeSelect from "./ModeSelect/ModeSelect";
import Trello from "./Trello/Trello";
import WorkSpace from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Notifications from "./Notifications/Notification";
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pl: 2 }}>
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 2 }}>
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
        <Profile />
      </Box>
    </Box>
  );
}
