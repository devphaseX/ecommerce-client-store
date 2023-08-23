'use client';

import { Colour, Size } from '@/types/type';
import { useState } from 'react';
import { Button } from './ui/button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { IconButton } from './ui/icon-button';
import { Filter } from '@/app/(routes)/product/[productId]/components/filter';

interface MobileFiltersProps {
  sizes: Array<Size>;
  colours: Array<Colour>;
}

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colours,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={modalOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 shadow-xl">
            {/* Close Button  */}
            <div className="flex items-center justify-end px-4">
              <IconButton onclick={onClose} icon={<X size={20} />} />
            </div>

            {/* Render the filters */}
            <div className="p-4">
              <Filter valueType="sizeId" name="Sizes" data={sizes} />
              <Filter valueType="colourId" name="Colours" data={colours} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
