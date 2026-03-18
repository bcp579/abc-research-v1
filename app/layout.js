import { Inter } from 'next/font/google';
import './globals.css';

// Import the components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ABC Research',
  description: 'Your partner in digital transformation.',
  icons: {
    icon: '/ABC-logo.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Header />

        <main>{children}</main>
        
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
