import Image from "next/image"
import "./styles.css"

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="secao-container">
        <div className="rodape-grid">
          <div className="rodape-coluna">
            <div className="rodape-logo">
              <Image
                src="/images/logo/essence-logo.png"
                alt="Essence"
                width={100}
                height={33}
                className="rodape-logo-imagem"
              />
            </div>
            <p className="rodape-texto">Seu destino confiável para fragrâncias e perfumes premium.</p>
          </div>

          <div className="rodape-coluna">
            <h4 className="rodape-subtitulo">Contato</h4>
            <address className="rodape-endereco">
              <p>Avenida das Fragrâncias, 123</p>
              <p>Cidade dos Perfumes, CP 12345</p>
              <p>contato@essence.com</p>
              <p>+55 (11) 1234-5678</p>
            </address>
          </div>
        </div>

        <div className="rodape-copyright">
          <p>© {new Date().getFullYear()} Essence. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

