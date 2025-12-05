import { useContext } from "react";
import { PostItContext } from "./PostItContext";

export function usePostItContext() {
  const ctx = useContext(PostItContext);

  if (!ctx) {
    throw new Error("usePostItContext must be used inside PostItProvider");
  }
  return ctx;
}
