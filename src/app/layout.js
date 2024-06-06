import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App Title',
  description: 'Next.js starter app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
