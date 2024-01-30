'use client';
import { PreviewModal } from '@/components/preview-modal';
import { useIsMounted } from 'usehooks-ts';
import { ToastProvider } from './toast-provider';

const ModalProvider = () => {
  const mounted = useIsMounted();

  if (!mounted()) return null;

  return (
    <>
      <PreviewModal />
      <ToastProvider />
    </>
  );
};

export { ModalProvider };
