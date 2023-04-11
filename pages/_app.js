import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <main className="font-jetbrains-mono">
      <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
