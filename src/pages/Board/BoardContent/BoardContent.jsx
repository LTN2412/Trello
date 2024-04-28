import Container from "@mui/material/Container";
import ListBoxCard from "./ListBoxCard/ListBoxCard";

export default function BoardContent({ board }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} -  ${theme.trelloCustom.boardBarHeight})`,
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <ListBoxCard columns={board?.columns} boardId={board?._id} />
    </Container>
  );
}
