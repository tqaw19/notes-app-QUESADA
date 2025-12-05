import React from "react";
import { Box } from "@mui/material";
import { PostItCard } from "./PostItCard";
import { usePostItState } from "@hooks/usePostItState";
import { postItGridContainerSX } from "./styles/PostItGrid";
import { usePostItContext } from "@context/usePostItContext";

export const PostItGrid = () => {
  const { postItState } = usePostItState();
  const { newNoteColor } = usePostItContext();

  return (
    <Box sx={postItGridContainerSX}>
      {newNoteColor && <div>new card</div>}

      {postItState?.postsItList?.map((postIt) => (
        <React.Fragment key={postIt.id}>
          <PostItCard {...postIt} />
        </React.Fragment>
      ))}
    </Box>
  );
};
