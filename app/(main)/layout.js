import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import '@/app/globals.css'


export default function MainLaouy({ children }) {
  return (
    <div className="mainPage">
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>

  )
}