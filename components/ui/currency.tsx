'use client';

import { useIsMounted } from 'usehooks-ts';

interface CurrencyProps {
  value: string | number;
}

const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const mounted = useIsMounted();
  if (!mounted()) return null;

  return <div className="font-semibold">{formatter(+value)}</div>;
};
