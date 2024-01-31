import Link from 'next/link';
import { Container } from './ui/container';
import { MainNav } from './main-nav';
import { getCategories } from '@/actions/get-categories';
import { NavbarActions } from './nav-bar-actions';
import { parsedEnv } from '@/lib/env';

export const revalidate = 0;

const Navbar = async ({ storeId }: { storeId: string }) => {
  const categories = await getCategories({ storeId });
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            href={`/store/${storeId}`}
            className="ml-4 flex lg:ml-0 gap-x-2"
          >
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export { Navbar };
