import sty from "./css/Footer.module.css"
export default function Footer() {
    return (
        <>
            <footer className={sty.footer }>
                <div className={sty.div}>
                    เว็บไซต์นี้จัดทำขึ้นเพื่อใช้สำหรับงานในองค์กรเท่านั้น
                </div>

            </footer>
        </>
    )
}