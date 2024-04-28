import Container from "@mui/material/Container";
import Board from "./pages/Board/Board";
import AppBar from "@/components/AppBar";
export default function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <Board />
    </Container>
  );
}
