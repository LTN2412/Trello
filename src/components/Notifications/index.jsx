import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";

export default function Notifications() {
  return (
    <Tooltip title="Notifications">
      <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
        <NotificationsNoneIcon color="action" />
      </Badge>
    </Tooltip>
  );
}
