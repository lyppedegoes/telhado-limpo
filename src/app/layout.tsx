import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';

import ButtonWhatsApp from '@/components/buttons/ButtonWatsapp';

import styles from './layout.module.scss';

import 'normalize.css';
import Footer from './footer';

const font = Open_Sans({ subsets: ['hebrew'] });

export const metadata: Metadata = {
  title: 'Telhado Limpo - Limpeza de Telhado em Curitiba',
  description: 'Limpeza de Telhado em Curitiba',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <header className={styles.header}>
          <Image
            src="svgs/logo-telhado-limpo.svg"
            alt="Telhado Limpo"
            width={274}
            height={50}
            priority
          />
          <div className={styles.header_icons}>
            <Image
              src="svgs/limpeza-seco.svg"
              alt="Limpeza à seco"
              width={274}
              height={42}
              priority
            />
            <ButtonWhatsApp />
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
