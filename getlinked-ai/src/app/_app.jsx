import RootLayout from "./layout";
import "../assets/fonts"
import "./styles/theme"
import "./globals.css"

function MyApp({ Component, pageProps }) {
  return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
  );
}

export default MyApp;
