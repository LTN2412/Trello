import { Container } from "@mui/material";
import AppBarHomePage from "./AppBar/AppBar";
import MainContent from "./MainContent/MainContent";
export default function HomePage() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      <AppBarHomePage />
      <MainContent />
    </Container>
  );
}
