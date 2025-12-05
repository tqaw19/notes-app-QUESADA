import { createContext } from "react";

export interface PostItContextValue {
  newNoteColor: string | null;
  setNewNoteColor: (color: string | null) => void;
}

export const PostItContext = createContext<PostItContextValue | undefined>(
  undefined
);
