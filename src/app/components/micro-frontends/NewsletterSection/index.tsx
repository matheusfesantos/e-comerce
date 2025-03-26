import "./styles.css"

export default function NewsletterSection() {
  return (
    <section className="secao-newsletter">
      <div className="secao-container">
        <div className="newsletter-conteudo">
          <h2 className="titulo-secao">Junte-se à Nossa Comunidade</h2>
          <p className="newsletter-descricao">
            Assine nossa newsletter para ofertas exclusivas, novidades e dicas sobre fragrâncias.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Seu endereço de e-mail" className="newsletter-input" />
            <button className="botao-primario">Assinar</button>
          </div>
        </div>
      </div>
    </section>
  )
}

