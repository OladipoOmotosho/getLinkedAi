import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav>
        <NavBar />
      </nav>
      <body>{children}</body>
      <Footer />
    </html>
  );
}
