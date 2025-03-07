import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./responsive.css";

import ThemeProvider from "@/context/ThemeProvider";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer/index";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <title>P&H by Priyanshu</title>
      <meta name="description" content="Shop the latest fashion trends at unbeatable prices. Premium quality clothing for men & women." />
      <meta name="keywords" content="Fashion, Designer, Fashion designer, Noida best designer" />
      <link rel="canonical" href="https://www.phbypriyanshu.com/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" /> */}
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
