import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddCardIcon from "@mui/icons-material/AddCard";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { CreateNewCardAPI } from "@/apis/index";

export default function CardFooter({ columnId }) {
  const [openNewCardInput, setopenNewCardInput] = useState(false);
  const toggleOpenNewCardInput = () => setopenNewCardInput(!openNewCardInput);
  const [cardTitle, SetCardTitle] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.card.cardFooterHeight,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-between",
      }}
    >
      {!openNewCardInput ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            onClick={toggleOpenNewCardInput}
            sx={{ color: "primary.main " }}
          >
            <AddCardIcon />
            <Typography pl={1}>Add new card</Typography>
          </Button>
          <MenuIcon sx={{ color: "text.primary", cursor: "pointer" }} />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
          }}
        >
          <TextField
            label="Title"
            type="text"
            size="small"
            variant="outlined"
            autoFocus
            // onBlur={() => {
            //   setopenNewCardInput(false);
            //   SetCardTitle("");
            // }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ClearIcon
                    onClick={() => {
                      toggleOpenNewCardInput();
                      SetCardTitle("");
                    }}
                    sx={{ cursor: "pointer" }}
                  />
                </InputAdornment>
              ),
            }}
            value={cardTitle}
            onChange={(e) => SetCardTitle(e.target.value)}
            sx={{
              height: "fit-content",
              "& label": { color: "white" },
              "& input": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
          />
          <Button
            onClick={async () => {
              await CreateNewCardAPI({ columnId: columnId, title: cardTitle });
            }}
            sx={{
              height: "40px",
              backgroundColor: "green",
              whiteSpace: "nowrap",
              p: "15px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Add Card
          </Button>
        </Box>
      )}
    </Box>
  );
}
