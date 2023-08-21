'use client';

import { cn, matchRoute } from '@/lib/utils';
import { Category } from '@/types/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MainNavProps {
  data: Category[];
}

type NavRoute = {
  label: string;
  href: string;
  routeActive: boolean;
};

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const navRoutes = data.map(
    (route): NavRoute => ({
      label: route.name,
      href: `/category/${route.id}`,
      get routeActive() {
        return matchRoute({
          activeRoute: this.label,
          currentRoute: pathname,
          pathnameMatch: true,
          partialMatch: true,
        });
      },
    })
  );

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {navRoutes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.routeActive ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
