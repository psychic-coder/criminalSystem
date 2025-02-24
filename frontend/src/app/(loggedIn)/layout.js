import Footer from "@/madeComponents/Footer";
import Navbar from "@/madeComponents/Navbar";

export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>

          <main>
            <Navbar/>
            {children}
            <Footer/>
            </main>
        </body>
      </html>
    )
  }