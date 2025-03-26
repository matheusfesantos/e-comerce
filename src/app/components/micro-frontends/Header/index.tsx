import Link from "next/link"
import Image from "next/image"
import "./styles.css"

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-container">
        <div className="cabecalho-conteudo">
          <Link href="/" className="logo-container">
            <Image src="/images/logo/essence-logo.png" alt="Essence" width={120} height={40} className="logo-imagem" />
          </Link>
        </div>
      </div>
    </header>
  )
}

