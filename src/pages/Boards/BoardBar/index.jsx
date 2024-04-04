import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";

export default function BoardBar() {
  const handleClick = () => {
    //
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
          label="hello"
          onClick={handleClick}
          sx={{
            backgroundColor: "white",
            border: "none",
            borderRadius: 2,
            padding: 0.5,
            "& .MuiSvgIcon-root": {
              color: "primary.700",
            },
            "&:hover ": {
              backgroundColor: "primary.300",
            },
          }}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Xin chao"
          onClick={handleClick}
          sx={{
            backgroundColor: "white",
            border: "none",
            borderRadius: 2,
            padding: 0.5,
            "& .MuiSvgIcon-root": {
              color: "primary.700",
            },
            "&:hover ": {
              backgroundColor: "primary.300",
            },
          }}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="hi"
          onClick={handleClick}
          sx={{
            backgroundColor: "white",
            border: "none",
            borderRadius: 2,
            padding: 0.5,
            "& .MuiSvgIcon-root": {
              color: "primary.700",
            },
            "&:hover ": {
              backgroundColor: "primary.300",
            },
          }}
        />
      </Box>
      <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
        <Button variant="outlined">
          <PersonAddAltIcon />
          Invite
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
    </Container>
  );
}
