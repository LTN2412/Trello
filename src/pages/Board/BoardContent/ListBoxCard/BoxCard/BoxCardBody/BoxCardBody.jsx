import Box from "@mui/material/Box";
import CardTrello from "./Card/Card";

export default function BoxCardBody({ cards }) {
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
      {cards?.map((card) => (
        <CardTrello key={card.id} card={card} />
      ))}
    </Box>
  );
}
