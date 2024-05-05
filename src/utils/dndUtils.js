export const findCardIndex = (columns, cardId, columnId) => {
  const column = columns.find((column) => column.id == columnId);
  return column.cardOrderIds.indexOf(cardId);
};
