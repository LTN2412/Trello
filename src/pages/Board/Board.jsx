import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBoard } from "@/features/board/boardSlice";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";

export default function Board() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard("6631800b573543b0c8e6b24e"));
  }, [dispatch]);
  return (
    <>
      <BoardBar />
      <BoardContent />
    </>
  );
}
