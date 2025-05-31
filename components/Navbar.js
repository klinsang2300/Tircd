import Link from "next/link";
import sty from "./css/Nav.module.css"
export default function Navbar(){
    return(
      <>
    <nav className={sty.nav} >
  <div className="flex gap-3">
     
  </div>
  <div className={sty.div}>
      <Link href='/'>หน้าแรก</Link>
      <Link href={'/Time'}>ข่าวPDPA</Link>
      {/* <Link href={'/about'}>About</Link>
      <Link href={'/info'}>Info</Link>
      <Link href={'/camp'}>Camp</Link> */}
    <Link href={'/login'} className={sty.button}>LOGIN</Link>
 
  </div>
</nav>

</>
)
}