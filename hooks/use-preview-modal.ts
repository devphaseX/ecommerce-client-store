import { create } from 'zustand';
import { Product } from '@/types/type';

interface PreviewModalStore {
  previewActive: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  previewActive: false,
  onOpen: (data) => set({ data, previewActive: true }),
  onClose: () => set({ previewActive: false, data: undefined }),
}));

export { usePreviewModal, type PreviewModalStore };
