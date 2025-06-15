import React, { useState } from "react";
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
  keyProp?: string | number;
}

const SWIPE_THRESHOLD = 120;

const SwipeCard: React.FC<SwipeCardProps> = ({
  onSwipe,
  children,
  keyProp,
}) => {
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
  const [isLeaving, setIsLeaving] = useState<null | "left" | "right">(null);

  const likeOpacity = useTransform(x, [40, 120], [0, 1]);
  const nopeOpacity = useTransform(x, [-120, -40], [1, 0]);

  function handleDragEnd(
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.x > SWIPE_THRESHOLD) {
      setIsLeaving("right");
    } else if (info.offset.x < -SWIPE_THRESHOLD) {
      setIsLeaving("left");
    }
  }

  function handleAnimationComplete() {
    if (isLeaving) {
      onSwipe(isLeaving);
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        key={keyProp}
        className="w-80 max-w-full h-96 bg-white rounded-xl shadow-xl flex items-center justify-center select-none touch-pan-y absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ x, rotate, background: bg }}
        drag={isLeaving ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 0.97 }}
        initial={{ scale: 1, opacity: 1, x: 0 }}
        animate={
          isLeaving === "right"
            ? { x: 500, opacity: 0 }
            : isLeaving === "left"
            ? { x: -500, opacity: 0 }
            : { x: 0, opacity: 1 }
        }
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {/* Like/Nope badges */}
        <motion.div
          className="absolute left-4 top-4 text-green-600 text-2xl font-bold"
          style={{ opacity: likeOpacity }}
        >
          LIKE
        </motion.div>
        <motion.div
          className="absolute right-4 top-4 text-red-500 text-2xl font-bold"
          style={{ opacity: nopeOpacity }}
        >
          NOPE
        </motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwipeCard;
