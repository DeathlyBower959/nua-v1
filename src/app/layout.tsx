import dynamic from 'next/dynamic';
import './globals.css';

// import { Nova_Round } from 'next/font/google'
// const nova = Nova_Round({
//   subsets: ['latin'],
//   weight: ['400']
// })
import { Noto_Sans } from 'next/font/google';
import SettingsProvider from '~/providers/settings';
import ThemeProvider from '~/providers/theme';

const Sidebar = dynamic(() => import('~/components/nav/Sidebar'), {
  ssr: false,
});

const noto_sans = Noto_Sans({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'NUA',
  description:
    'Utility applications for everything you need; PDF editing, image modification, writing, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={noto_sans.className}>
        <ThemeProvider>
          <SettingsProvider>
            <div className='flex min-h-screen'>
              <Sidebar />
              {children}
            </div>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
