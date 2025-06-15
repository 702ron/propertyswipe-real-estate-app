import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import type { PanInfo } from "framer-motion";

interface SwipeCardProps {
  onSwipe: (direction: "left" | "right") => void;
  children: React.ReactNode;
}

const SWIPE_THRESHOLD = 120;

const SwipeCard: React.FC<SwipeCardProps> = ({ onSwipe, children }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);
  const bg = useTransform(
    x,
    [-200, 0, 200],
    [
      "rgba(239,68,68,0.15)", // red-500/15
      "rgba(255,255,255,1)",
      "rgba(34,197,94,0.15)", // green-500/15
    ]
  );

  function handleDragEnd(
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.x > SWIPE_THRESHOLD) {
      onSwipe("right");
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      onSwipe("left");
    } else {
      // Snap back
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="w-80 max-w-full h-96 bg-white rounded-xl shadow-xl flex items-center justify-center select-none touch-pan-y"
        style={{ x, rotate, background: bg }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 0.97 }}
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwipeCard;
