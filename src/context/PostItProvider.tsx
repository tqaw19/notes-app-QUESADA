import { useState } from "react";
import { PostItContext, type PostItContextValue } from "./PostItContext";
import { usePostItState } from "@hooks/usePostItState";

export const PostItProvider = ({ children }: { children: React.ReactNode }) => {
  const { postItState, actions } = usePostItState();
  const [newNoteColor, setNewNoteColor] = useState<string | null>(null);

  const value: PostItContextValue = {
    postItState,
    actions,
    newNoteColor,
    setNewNoteColor,
  };
  return (
    <PostItContext.Provider value={value}>{children}</PostItContext.Provider>
  );
};

export default PostItProvider;
