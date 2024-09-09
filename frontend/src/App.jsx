import Container from "@mui/material/Container";
import AppBar from "@/components/AppBar/AppBar";
import Board from "./pages/Board/Board";
export default function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <Board />
    </Container>
  );
}
