"use client";

import { useConfettiStore } from "@/hooks/ConfettiStore";
import ReactConfetti from "react-confetti";

export const ConfettiProvider = () => {
  const confetti = useConfettiStore();

  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className='pointer-events-none z-[100]'
      numberOfPieces={1200}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
