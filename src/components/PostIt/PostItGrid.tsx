import React from "react";
import { Box } from "@mui/material";
import { PostItCard } from "./PostItCard";
import { postItGridContainerSX } from "./styles/PostItGrid";
import { usePostItContext } from "@context/usePostItContext";
import { NewPostItCard } from "./NewPostItCard";

export const PostItGrid = () => {
  const { postItState, newNoteColor } = usePostItContext();

  return (
    <Box sx={postItGridContainerSX}>
      {newNoteColor && <NewPostItCard />}

      {postItState?.postsItList?.map((postIt) => (
        <React.Fragment key={postIt.id}>
          <PostItCard {...postIt} />
        </React.Fragment>
      ))}
    </Box>
  );
};
