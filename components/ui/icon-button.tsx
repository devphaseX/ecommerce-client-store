import { cn } from '@/lib/utils';
import { MouseEventHandler } from 'react';

interface IconButtonProps {
  onclick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: React.ReactElement;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onclick,
  className,
  icon,
}) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        'rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition',
        (className ||= '')
      )}
    >
      {icon}
    </button>
  );
};
