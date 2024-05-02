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
import { dndColumn, selectColumns } from "@/features/board/boardSlice";
import orderedArray from "@/utils/orderedArray";
import ListBoxCard from "./ListBoxCard/ListBoxCard";
import { useState } from "react";
import BoxCard from "./ListBoxCard/BoxCard/BoxCard";
import CardTrello from "./ListBoxCard/BoxCard/BoxCardBody/Card/Card";

export default function BoardContent() {
  const imgPath = "src/assets/vangogh.jpg";
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const boardId = useSelector((state) => state.board.board.id);
  const columnOrderIds = useSelector(
    (state) => state.board.board.columnOrderIds
  );
  const orderedColumns = orderedArray(columns, columnOrderIds, "id");
  const [activeData, setActiveData] = useState(null);
  const handleDragStart = (event) => {
    setActiveData(event.active?.data.current);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = columnOrderIds.indexOf(active?.id);
    const newIndex = columnOrderIds.indexOf(over?.id);
    dispatch(
      dndColumn({
        boardId: boardId,
        columnOrderIds: arrayMove(columnOrderIds, oldIndex, newIndex),
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
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <ListBoxCard columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {activeData?.boardId ? (
            <BoxCard columnId={activeData.id} />
          ) : (
            <CardTrello card={activeData} />
          )}
        </DragOverlay>
      </DndContext>
    </Container>
  );
}
