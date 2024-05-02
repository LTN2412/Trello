import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachmentIcon from "@mui/icons-material/Attachment";

export default function CardTrello({ card }) {
  const shouldShowCardActions = () =>
    !!card?.memberIds?.length ||
    !!card?.comments?.length ||
    !!card?.attachments?.length;
  return (
    <Card
      sx={{
        overflow: "unset",
        backgroundColor: "secondary.main",
        borderRadius: "12px",
      }}
    >
      {card?.cover && <CardMedia component="img" src={card.cover} />}
      <CardContent>
        <Typography color={"text.main"}>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardActions() && (
        <CardActions sx={{ pt: 0 }}>
          {!!card.memberIds.length && (
            <Button startIcon={<GroupIcon />}>{card.memberIds.length}</Button>
          )}
          {!!card.comments.length && (
            <Button startIcon={<ModeCommentIcon />}>
              {card.comments.length}
            </Button>
          )}
          {!!card.attachments.length && (
            <Button startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
