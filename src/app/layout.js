import { chivo_mono, poppins, work_sans } from './fonts.js'
import Header from './globals/Header.js'
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
      </body>
    </html>
  );
}
