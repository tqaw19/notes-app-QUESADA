import type { usePostItState } from "@hooks/usePostItState";
import { createContext } from "react";

export interface PostItContextValue {
  postItState: ReturnType<typeof usePostItState>["postItState"];
  actions: ReturnType<typeof usePostItState>["actions"];
  newNoteColor: string | null;
  setNewNoteColor: (color: string | null) => void;
}

export const PostItContext = createContext<PostItContextValue | undefined>(
  undefined
);
