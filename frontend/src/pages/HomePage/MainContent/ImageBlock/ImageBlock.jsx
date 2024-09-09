import { Box } from "@mui/material";
import Image from "mui-image";

export default function ImageBlock() {
  return (
    <Box>
      <Image
        src="/TrelloUIImageBlock.png"
        duration={2000}
        fit="contain"
      ></Image>
    </Box>
  );
}
