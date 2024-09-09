import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function TextBlock() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 5, gap: 2 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Trello brings all your tasks, teammates, and tools together
      </Typography>
      <Typography variant="h5">
        Keep everything in the same place-even if your team isn’t.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "", gap: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Email"
          sx={{
            flex: 3,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          }}
        ></TextField>
        <Button variant="contained" sx={{ flex: 1, color: "text.primary" }}>
          Sign up now!
        </Button>
      </Box>
      <Typography>
        {"Already have account? "}
        <Link
          to={"/auth/signin"}
          style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
        >
          Sign in
        </Link>
        {" now!"}
      </Typography>
    </Box>
  );
}
