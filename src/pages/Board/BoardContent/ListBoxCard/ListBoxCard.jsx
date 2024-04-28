import Button from "@mui/material/Button";
import BoxCard from "./BoxCard/BoxCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { useState } from "react";
import { CreateNewColumnAPI } from "@/apis/index";

export default function ListBoxCard({ columns, boardId }) {
  const [openNewColumnInput, setopenNewColumnInput] = useState(false);
  const toggleOpenNewColumnInput = () =>
    setopenNewColumnInput(!openNewColumnInput);
  const [columnTitle, SetColumnTitle] = useState("");
  return (
    <>
      {columns?.map((column) => {
        return <BoxCard key={column._id} column={column} />;
      })}
      {!openNewColumnInput ? (
        <Button
          startIcon={<AddCardIcon />}
          variant="contained"
          sx={{
            height: "fit-content",
            color: "red",
            backgroundColor: "green",
            p: 1.5,
          }}
          onClick={toggleOpenNewColumnInput}
        >
          Add new column
        </Button>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
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
                    onClick={toggleOpenNewColumnInput}
                    sx={{ cursor: "pointer" }}
                  />
                </InputAdornment>
              ),
            }}
            value={columnTitle}
            onChange={(e) => SetColumnTitle(e.target.value)}
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
            sx={{
              backgroundColor: "green",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            onClick={async () =>
              await CreateNewColumnAPI({ boardId: boardId, title: columnTitle })
            }
          >
            Add Column
          </Button>
        </Box>
      )}
    </>
  );
}
