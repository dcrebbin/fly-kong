import { create } from "zustand";
import { LocationItem } from "../common/locations";

interface NewLocationState {
  songTitle: string;
  setSongTitle: (songTitle: string) => void;
  artists: string[];
  setArtists: (artists: string[]) => void;
  videoUrl: string;
  setVideoUrl: (videoUrl: string) => void;
  address: string;
  setAddress: (address: string) => void;
  locationCoordinates: string;
  setLocationCoordinates: (locationCoordinates: string) => void;
  streetView: string;
  setStreetView: (streetView: string) => void;
}

export const useNewLocationStore = create<NewLocationState>((set) => ({
  songTitle: "",
  setSongTitle: (songTitle: string) => set({ songTitle }),
  artists: [],
  setArtists: (artists: string[]) => set({ artists }),
  videoUrl: "",
  setVideoUrl: (videoUrl: string) => set({ videoUrl }),
  address: "",
  setAddress: (address: string) => set({ address }),
  locationCoordinates: "",
  setLocationCoordinates: (locationCoordinates: string) =>
    set({ locationCoordinates }),
  streetView: "",
  setStreetView: (streetView: string) => set({ streetView }),
}));
