import Navbar from "@/components/Navbar";
import './globals.css'
import {Inter} from "next/font/google";
export const  metadata = {
  title: 'TimeRecrod',
  description: 'Next Test',
}
const pageFont = Inter({
  subsets: ['greek'],
})
 
export default function RootLayout({ children }) {
  return (
<html  >
    <body>
      <Navbar/>
      {children}
    </body>
</html>
  );
}
