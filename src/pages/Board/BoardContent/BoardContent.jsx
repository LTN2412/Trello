import Container from "@mui/material/Container";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import {
  boardsSelector,
  dndColumnAsync,
  // newActiveCard,
  // newOverCard
} from "@/features/board/boardSlice";
import ListBoxCard from "./ListBoxCard/ListBoxCard";
import { useState } from "react";
import BoxCard from "./ListBoxCard/BoxCard/BoxCard";
import CardTrello from "./ListBoxCard/BoxCard/BoxCardBody/Card/Card";
import { findCardIndex } from "@/utils/dndUtils";
import { columnsSelector } from "@/features/column/columnsSlice";

export default function BoardContent() {
  const imgPath = "src/assets/vangogh.jpg";

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);

  const dispatch = useDispatch();
  const columns = useSelector((state) => columnsSelector.selectAll(state));
  const board = useSelector((state) => boardsSelector.selectAll(state)[0]);
  const [activeData, setActiveData] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    if (active.data.current?.boardId) setActiveType("column");
    else setActiveType("card");
    setActiveData(active.data.current);
  };

  // const handleDragOver = (event) => {
  //   const { active, over } = event;
  //   if (activeType == "card") {
  //     var activeColumnId = active?.data.current?.columnId;
  //     var overColumnId = over?.data.current?.columnId;
  //   }
  //   if (overColumnId) {
  //     const overColumn = columns.find((column) => column.id == overColumnId);
  //     const overCardIndex = findCardIndex(columns, over.id, overColumnId);
  //     const isBelowOverItem =
  //       active.rect.current.translated &&
  //       active.rect.current.translated.top > over.rect.top + over.rect.height;

  //     const modifier = isBelowOverItem ? 1 : 0;
  //     const newCardIndex =
  //       overCardIndex >= 0 ? overCardIndex + modifier : overColumn.length + 1;
  //     dispatch(
  //       newActiveCard({
  //         activeCardId: active.id,
  //         activeColumnId: activeColumnId,
  //       })
  //     );
  //     dispatch(
  //       newOverCard({ newCardIndex: newCardIndex, overColumnId: overColumnId })
  //     );
  //   }
  // };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = board?.columnOrderIds?.indexOf(active?.id);
    const newIndex = board?.columnOrderIds?.indexOf(over?.id);
    dispatch(
      dndColumnAsync({
        boardId: board?.id,
        columnOrderIds: arrayMove(board?.columnOrderIds, oldIndex, newIndex),
      })
    );
    setActiveData(null);
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
        // onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
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
