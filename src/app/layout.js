import Header from './globals/Header.js'
import Footer from './globals/Footer.js'
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
