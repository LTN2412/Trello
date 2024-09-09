import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (e) => {
    const selectMode = e.target.value;
    setMode(selectMode);
  };
  return (
    <FormControl
      sx={{ m: 1, minWidth: "120px", borderColor: "white" }}
      size="small"
    >
      <InputLabel
        id="demo-select-small-label"
        sx={{
          color: "white",
          "&:hover": { color: "white" },
          "&.Mui-focused": { color: "white" },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: "white",
          ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          "&:hover ": {
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LightModeIcon /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <DarkModeOutlinedIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SettingsBrightnessIcon /> Sytem
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
