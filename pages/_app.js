import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file
// import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS after the component mounts
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 200,
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
