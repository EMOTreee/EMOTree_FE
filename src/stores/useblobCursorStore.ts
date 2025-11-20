import { create } from "zustand";

interface BlobCursorState {
  blobCursorColor: string;
  setBlobCursorColor: (color: string) => void;
}

const useBlobCursorStore = create<BlobCursorState>((set) => ({
  blobCursorColor: '#DBDBDB',
  setBlobCursorColor: (color: string) => set(() => ({ blobCursorColor: color })),
}));

export default useBlobCursorStore;