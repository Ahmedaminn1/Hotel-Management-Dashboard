import type { Metadata } from 'next';
import { Comfortaa, Philosopher } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/shared/navbar/Navbar';
import AppProviders from '@/components/providers/AppProviders';

const comfortaa = Comfortaa({
  variable: '--font-main',
  subsets: ['latin'],
});

const philosopher = Philosopher({
  variable: '--font-header',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Palm Mirage Dashboard',
  description: 'Palm Mirage Hotel administration dashboard.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${comfortaa.variable} ${philosopher.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
        <AppProviders>
          <Navbar user={null} />
          <main className="pt-16">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
