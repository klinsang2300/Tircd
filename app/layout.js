import Navbar from "@/components/Navbar";
import './globals.css'

export const  metadata = {
  title: 'TimeRecrod',
  description: 'Next Test',
}
 
export default function RootLayout({ children }) {
  return (
<html>
    <body>
      <Navbar/>
      {children}
    </body>
</html>
  );
}
