import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
// import { selectColumnById } from "@/features/board/boardSlice";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import BoxCardHeader from "./BoxCardHeader/BoxCardHeader";
import BoxCardFooter from "./BoxCardFooter/BoxCardFooter";
import BoxCardBody from "./BoxCardBody/BoxCardBody";
import { columnsSelector } from "@/features/column/columnsSlice";

export default function BoxCard({ columnId }) {
  const column = useSelector((state) =>
    columnsSelector.selectById(state, columnId)
  );
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: columnId, data: column });

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : null,
  };

  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      sx={{
        minWidth: (theme) => theme.trelloCustom.card.cardWidth,
        height: "fit-content",
        maxHeight: (theme) =>
          `calc( ${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
            5
          )} )`,
        backgroundColor: "primary.dark",
        borderRadius: "12px",
        p: "0 10px",
        m: "0 10px",
      }}
    >
      <BoxCardHeader columnTitle={column?.title} />
      <BoxCardBody columnId={columnId} />
      <BoxCardFooter columnId={columnId} />
    </Box>
  );
}
