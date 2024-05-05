import Box from "@mui/material/Box";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CardTrello from "./Card/Card";
import { useSelector } from "react-redux";
import { selectAllCardByColumnId } from "@/features/card/cardsSlice";

export default function BoxCardBody({ columnId }) {
  const cards = useSelector((state) =>
    selectAllCardByColumnId(state, columnId)
  );
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: (theme) =>
          `calc( ${theme.trelloCustom.boardContentHeight} - ${
            theme.trelloCustom.card.cardHeaderHeight
          } - ${theme.trelloCustom.card.cardFooterHeight} - ${theme.spacing(
            5
          )} )`,
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
        gap: 1,
      }}
    >
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        {cards?.map((card) => (
          <CardTrello key={card.id} card={card} />
        ))}
      </SortableContext>
    </Box>
  );
}
