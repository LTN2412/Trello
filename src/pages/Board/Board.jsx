import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBoard } from "@/features/board/boardSlice";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";

export default function Board() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard("6638e741f7d1588dd6e53ced"));
  }, [dispatch]);
  return (
    <>
      <BoardBar />
      <BoardContent />
    </>
  );
}
