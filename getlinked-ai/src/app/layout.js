import Footer from "./component/footer/Footer";
import NavBar from "./component/navBar/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>GetLinked</title>
      </head>
      <body>
        <nav>
          <NavBar />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
