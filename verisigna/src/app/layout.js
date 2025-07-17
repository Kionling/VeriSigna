import './globals.css';
import Footer from '../app/components/footer';

export const metadata = {
  title: 'VeriSigna',
  description: 'Made In San Francisco. ❤️',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        <main className="min-h-screen px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
