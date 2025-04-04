import Link from "next/link"
import "./styles.css"

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-container">
        <div className="cabecalho-conteudo">
          <Link href="/" className="logo-container">
            <h3>Maju Cosméticos</h3>
          </Link>
        </div>
      </div>
    </header>
  )
}

