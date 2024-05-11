import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
import { fetchBoardId } from "@/features/user/usersSlice";

export default function Board() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoardId());
  }, [dispatch]);
  return (
    <>
      <BoardBar />
      <BoardContent />
    </>
  );
}
