import Box from "@mui/material/Box";
import CardTrello from "./Card/Card";

const CARD_HEADER_HEIGHT = "60px";
const CARD_FOOTER_HEIGHT = "60px";
export default function BoxCardBody({ cards }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.card.cardContentHeight,
        maxHeight: (theme) =>
          `calc( ${
            theme.trelloCustom.boardContentHeight
          } - ${CARD_HEADER_HEIGHT} - ${CARD_FOOTER_HEIGHT} - ${theme.spacing(
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
        <CardTrello key={card._id} card={card} />
      ))}
    </Box>
  );
}
