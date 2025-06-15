import { useState } from "react";

export function useSwipe<T>(items: T[]) {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<T[]>([]);
  const [disliked, setDisliked] = useState<T[]>([]);

  const current = items[index];

  function swipe(direction: "left" | "right") {
    if (!current) return;
    if (direction === "right") setLiked([...liked, current]);
    if (direction === "left") setDisliked([...disliked, current]);
    setIndex(index + 1);
  }

  function reset() {
    setIndex(0);
    setLiked([]);
    setDisliked([]);
  }

  return {
    current,
    index,
    liked,
    disliked,
    hasMore: index < items.length,
    swipe,
    reset,
  };
}
