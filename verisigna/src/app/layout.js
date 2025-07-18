import './globals.css';
import Footer from '../app/components/footer';
import Navbar from '../app/components/navbar';
export const metadata = {
  title: 'VeriSigna',
  description: 'Made In San Francisco. ❤️',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="antialiased bg-white text-black">
        <Navbar />
        <main className="min-h-screen px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
