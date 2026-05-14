import { create } from "zustand";

interface AnimationState {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  togglePlay: () => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  currentTime: 0,
  duration: 30, // seconds
  isPlaying: false,
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
