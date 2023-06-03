import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <main className="text-base">
      <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
