import Container from "@mui/material/Container";
import ListBoxCard from "./ListBoxCard/ListBoxCard";
import BoxCard from "./ListBoxCard/BoxCard/BoxCard";
import CardTrello from "./ListBoxCard/BoxCard/BoxCardBody/Card/Card";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import { boardsSelector, dndColumnAsync } from "@/features/board/boardSlice";
import { updateCard } from "@/features/card/cardsSlice";
import {
  columnsSelector,
  dndCardAsync,
  dndCardOther,
  updateOrderColumn,
} from "@/features/column/columnsSlice";
import { useState } from "react";

export default function BoardContent() {
  const imgPath = "/vangogh.jpg";

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);

  const dispatch = useDispatch();
  const columns = useSelector((state) => columnsSelector.selectAll(state));
  const board = useSelector((state) => boardsSelector.selectAll(state)[0]);
  const [activeData, setActiveData] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [oldColumnIdWhenActive, setOldColumnIdWhenActive] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    if (active.data.current?.boardId) setActiveType("column");
    else {
      setActiveType("card");
      setOldColumnIdWhenActive(active.data.current.columnId);
    }
    setActiveData(active.data.current);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (activeType == "card") {
      const activeColumnId = active?.data.current?.columnId;
      const overColumnId = over?.data.current?.columnId;
      const activeCardId = active?.data.current?.id;
      const overCardId = over?.data.current?.id;
      if (overColumnId) {
        const activeColumn = columns.find(
          (column) => column.id == activeColumnId
        );
        const overColumn = columns.find((column) => column.id == overColumnId);
        if (activeColumnId != overColumnId) {
          const overCardIndex = overColumn?.cardOrderIds.indexOf(overCardId);

          const isBelowOverItem =
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;
          const modifier = isBelowOverItem ? 1 : 0;
          const newCardIndex =
            overCardIndex >= 0
              ? overCardIndex + modifier
              : overColumn.length + 1;

          const nextActiveColumn = activeColumn?.cardOrderIds?.filter(
            (cardId) => cardId != activeCardId
          );

          const nextOverColumn = overColumn?.cardOrderIds.filter(
            (cardId) => cardId != activeCardId
          );

          nextOverColumn.splice(newCardIndex, 0, activeCardId);

          dispatch(
            updateOrderColumn({
              columnId: activeColumnId,
              cardOrderIds: nextActiveColumn,
            })
          );

          dispatch(
            updateOrderColumn({
              columnId: overColumnId,
              cardOrderIds: nextOverColumn,
            })
          );

          dispatch(
            updateCard({
              id: activeCardId,
              columnId: overColumnId,
            })
          );
        }
      }
    }
  };

  const handleDragEnd = (event) => {
    //column
    const { active, over } = event;
    if (activeType == "column") {
      const oldColumnIndex = board?.columnOrderIds?.indexOf(active?.id);
      const newColumnIndex = board?.columnOrderIds?.indexOf(over?.id);
      dispatch(
        dndColumnAsync({
          boardId: board?.id,
          columnOrderIds: arrayMove(
            board?.columnOrderIds,
            oldColumnIndex,
            newColumnIndex
          ),
        })
      );
      return;
    }
    if (activeType == "card") {
      const activeColumnId = oldColumnIdWhenActive;
      const overColumnId = over?.data.current?.columnId;
      const activeCardId = active?.data.current?.id;
      const overCardId = over?.data.current?.id;
      if (overColumnId) {
        const activeColumn = columns.find(
          (column) => column.id == activeColumnId
        );
        const overColumn = columns.find((column) => column.id == overColumnId);
        if (oldColumnIdWhenActive != overColumnId) {
          const overCardIndex = overColumn?.cardOrderIds.indexOf(overCardId);

          const isBelowOverItem =
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;
          const modifier = isBelowOverItem ? 1 : 0;
          const newCardIndex =
            overCardIndex >= 0
              ? overCardIndex + modifier
              : overColumn?.length + 1;

          const nextActiveColumn = activeColumn?.cardOrderIds?.filter(
            (cardId) => cardId != activeCardId
          );

          const nextOverColumn = overColumn?.cardOrderIds.filter(
            (cardId) => cardId != activeCardId
          );

          nextOverColumn.splice(newCardIndex, 0, activeCardId);

          dispatch(
            dndCardOther({
              activeColumnId: activeColumnId,
              nextActiveColumn: nextActiveColumn,
              overColumnId: overColumnId,
              nextOverColumn: nextOverColumn,
              activeCardId: activeCardId,
            })
          );
        } else {
          const cardOrderIds = activeColumn?.cardOrderIds;
          const oldCardIndex = cardOrderIds.indexOf(activeCardId);
          const newCardIndex = cardOrderIds.indexOf(overCardId);
          const newCardOrderIds = arrayMove(
            cardOrderIds,
            oldCardIndex,
            newCardIndex
          );
          dispatch(
            dndCardAsync({
              columnId: oldColumnIdWhenActive,
              cardOrderIds: newCardOrderIds,
            })
          );
        }
      }
    }
    setActiveData(null);
    setActiveType(null);
    setOldColumnIdWhenActive(null);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: 0.5,
        },
      },
    }),
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} -  ${theme.trelloCustom.boardBarHeight})`,
        backgroundImage: `url(${imgPath})`,
        backgroundSize: "cover",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <ListBoxCard />
        <DragOverlay dropAnimation={dropAnimation}>
          {activeType == "column" ? (
            <BoxCard columnId={activeData?.id} />
          ) : (
            <CardTrello card={activeData} />
          )}
        </DragOverlay>
      </DndContext>
    </Container>
  );
}
