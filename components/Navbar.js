
import Link from "next/link";
import sty from "./css/Nav.module.css"


export default function Navbar() {

  return (
    <>
      <nav className={sty.nav} >
        <div className={sty.divnav} >
          <div className="flex gap-3">

          </div>
          <div className={sty.div}>
            <Link href='/'>หน้าแรก</Link>
            <Link href={'/time'}>ข่าวPDPA</Link>
           <div className={sty.button}>  <Link   href={'/login'}>LOGIN</Link></div>
          </div>
        </div>
      </nav>

    </>
  )
}