
import './globals.css'
import { Inter } from "next/font/google";

export const metadata = {
  title: 'TimeRecrod',
  description: 'Next Test',
}
const pageFont = Inter({
  subsets: ['greek'],
})

export default async function RootLayout({ children }) {

  return (
    <html>
      <body >


        <main >{children}</main>


      </body>
    </html>
  );
}
