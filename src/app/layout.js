import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

//Generate static metadata
export const metadata = {
  title: {
    default: 'Next.js 14 Homepage ',
    template: '%s | Next.js 14  ',
  },
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
