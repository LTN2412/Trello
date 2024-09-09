import Button from "@mui/material/Button";
import AddCardIcon from "@mui/icons-material/AddCard";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import BoxCard from "./BoxCard/BoxCard";
import { columnsSelector } from "@/features/column/columnsSlice";
import { createNewColumn } from "@/features/column/columnsSlice";

export default function ListBoxCard() {
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.board.ids[0]);
  const columns = useSelector((state) => columnsSelector.selectAll(state));
  const columnsIds = useSelector((state) => state.column.ids);
  const [openNewColumnInput, setopenNewColumnInput] = useState(false);
  const toggleOpenNewColumnInput = () =>
    setopenNewColumnInput(!openNewColumnInput);
  const [columnTitle, SetColumnTitle] = useState("");
  return (
    <>
      {columns && (
        <SortableContext
          items={columnsIds}
          strategy={horizontalListSortingStrategy}
        >
          {columns?.map((column) => {
            return <BoxCard key={column.id} columnId={column.id} />;
          })}
        </SortableContext>
      )}
      {!openNewColumnInput ? (
        <Button
          startIcon={<AddCardIcon />}
          variant="contained"
          sx={{
            minWidth: "200px",
            height: "fit-content",
            color: "text.primary",
            backgroundColor: "primary.main",
            p: 1.5,
            mr: 1,
            whiteSpace: "nowrap",
            "&:hover": {
              opacity: "0.8",
            },
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
            variant="filled"
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
              minWidth: "200px",
              height: "fit-content",
              backgroundColor: "primary.main",
              mr: 1,
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
              backgroundColor: "primary.main",
              color: "text.secondary",
              mt: 1,
              mr: 1,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            onClick={() => {
              dispatch(
                createNewColumn({ boardId: boardId, title: columnTitle })
              );
              setopenNewColumnInput(false);
              SetColumnTitle("");
            }}
          >
            Add Column
          </Button>
        </Box>
      )}
    </>
  );
}
