import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddCardIcon from "@mui/icons-material/AddCard";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewCard } from "@/features/card/cardsSlice";

export default function CardFooter({ columnId }) {
  // const column = useSelector((state) => selectColumnById(state, columnId));
  const dispatch = useDispatch();
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
        px: 1,
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
          <Button onClick={toggleOpenNewCardInput} sx={{ color: "text.main " }}>
            <AddCardIcon sx={{ color: "text.main" }} />
            <Typography pl={1} color={"text.main"}>
              Add new card
            </Typography>
          </Button>
          <MenuIcon sx={{ color: "text.main", cursor: "pointer" }} />
        </Box>
      ) : (
        <Box
          // onBlur={() => {
          //   setopenNewCardInput(false);
          //   SetCardTitle("");
          // }}
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
              width: "200px",
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
            onClick={() => {
              dispatch(createNewCard({ columnId: columnId, title: cardTitle }));
              setopenNewCardInput(false);
              SetCardTitle("");
            }}
            sx={{
              height: "40px",
              color: "text.secondary",
              border: "1px solid white",
              whiteSpace: "nowrap",
              p: "20px",
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
