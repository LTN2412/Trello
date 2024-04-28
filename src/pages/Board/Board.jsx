import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { useEffect, useState } from "react";
import { fetchBoardAPI } from "../../apis";
export default function Board() {
  const [board, setBoard] = useState();
  useEffect(() => {
    const boardId = "66297216a502c904db80d942";
    fetchBoardAPI(boardId).then((board) => setBoard(board));
  }, []);
  return (
    <>
      <BoardBar board={board} />
      <BoardContent board={board} />
    </>
  );
}
