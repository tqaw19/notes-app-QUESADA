import type { PostIt } from "@types";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "notes-app-todo-state";

interface PostItState {
  postsItList: PostIt[];
  searchTerm: string;
  selectedTasks: string[];
}

export function usePostItState() {
  const [postItState, setPostItState] = useState<PostItState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        postsItList: parsed.postsItList ?? [],
        searchTerm: parsed.searchTerm ?? "",
        selectedTasks: parsed.selectedTasks ?? [],
      } as PostItState;
    }

    return {
      postsItList: [],
      searchTerm: "",
      selectedTasks: [],
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(postItState));
  }, [postItState]);

  const actions = {
    addPostIt: useCallback(
      (body: string, bgColor: string, onSaved?: () => void) => {
        const newPostIt = {
          id: String(Date.now()),
          body: body.trim(),
          bgColor,
          createdAt: new Date().toISOString(),
        };

        setPostItState((prev) => {
          const updated = {
            ...prev,
            postsItList: [newPostIt, ...prev.postsItList],
          };

          requestAnimationFrame(() => {
            if (onSaved) onSaved();
          });

          return updated;
        });
      },
      []
    ),

    deletePostIt: useCallback((id: string) => {
      setPostItState((prev) => ({
        ...prev,
        postsItList: prev.postsItList.filter((postIt) => postIt.id !== id),
      }));
    }, []),

    setSearchTerm: useCallback((searchTerm: string) => {
      setPostItState((prev) => ({ ...prev, searchTerm }));
    }, []),
  };

  return { postItState, actions };
}
