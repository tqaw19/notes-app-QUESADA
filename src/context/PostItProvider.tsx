import { useState } from "react";
import { PostItContext } from "./PostItContext";

export const PostItProvider = ({ children }: { children: React.ReactNode }) => {
  const [newNoteColor, setNewNoteColor] = useState<string | null>(null);

  return (
    <PostItContext.Provider value={{ newNoteColor, setNewNoteColor }}>
      {children}
    </PostItContext.Provider>
  );
};

export default PostItProvider;
