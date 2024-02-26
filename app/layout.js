import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";
import { mainFont } from "@/libs/font";
import Footer from "@/components/footer";
export default function RootLayout({ children }) {
  return (
    <html className={mainFont.className} lang="en">
      <body className="layout">
        <div className="overlay"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
