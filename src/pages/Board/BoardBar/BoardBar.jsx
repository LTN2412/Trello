import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { boardsSelector } from "@/features/board/boardSlice";

export default function BoardBar() {
  const board = useSelector((state) => boardsSelector.selectAll(state)[0]);
  const handleClick = () => {};
  const chipCss = {
    backgroundColor: "primary.main",
    borderRadius: 2,
    padding: 0.5,
    color: "text.main",
    "& .MuiSvgIcon-root": {
      color: "text.main",
    },
    "&:hover ": {
      opacity: "0.8",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "secondary.main",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          icon={<DashboardIcon />}
          label={board?.title}
          onClick={handleClick}
          sx={chipCss}
        />
        <Chip
          icon={<VpnLockIcon />}
          label={board?.description}
          onClick={handleClick}
          sx={chipCss}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Google Drive"
          onClick={handleClick}
          sx={chipCss}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            gap: 1,
            backgroundColor: "primary.main",
            color: "text.main",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: "0.5",
            },
          }}
        >
          <PersonAddAltIcon />
          <Typography>Invite</Typography>
        </Button>
        <AvatarGroup max={4} total={24}>
          <Tooltip title="LTN">
            <Avatar alt="L" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="LTN">
            <Avatar alt="S" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="LTN">
            <Avatar alt="M" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}
