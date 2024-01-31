import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import '@/lib/env';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/nav-bar';
import { ModalProvider } from '@/providers/modal-provider';
import { StoreIdParams, StoreIdParamsSchema } from '@/lib/validations/params';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store ',
};

export default function RootLayout({
  params,
  children,
}: {
  params: StoreIdParams;
  children: React.ReactNode;
}) {
  params = StoreIdParamsSchema.parse(params);
  const { storeId } = params;
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar storeId={storeId} />
        {children}
        <Footer copyRightYear={new Date().getFullYear().toString()} />
      </body>
    </html>
  );
}
