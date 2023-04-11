import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <div className={jetbrains_mono.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
