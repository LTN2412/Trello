import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";

export default function Notifications() {
  return (
    <Tooltip title="Notifications">
      <Badge color="secondary" variant="standard" sx={{ cursor: "pointer" }}>
        <NotificationsNoneIcon color="red" />
      </Badge>
    </Tooltip>
  );
}
