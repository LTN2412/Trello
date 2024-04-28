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

export default function BoardBar({ board }) {
  const handleClick = () => {};
  const chipCss = {
    backgroundColor: "white",
    borderRadius: 2,
    padding: 0.5,
    "& .MuiSvgIcon-root": {
      color: "#3498db",
    },
    "&:hover ": {
      backgroundColor: "#3498db",
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
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
        <Tooltip title={board?.description}>
          <Chip
            icon={<DashboardIcon />}
            label={board?.title}
            onClick={handleClick}
            sx={chipCss}
          />
        </Tooltip>
        <Chip
          icon={<VpnLockIcon />}
          label={board?.description}
          onClick={handleClick}
          sx={chipCss}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="hi"
          onClick={handleClick}
          sx={chipCss}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            gap: 1,
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
