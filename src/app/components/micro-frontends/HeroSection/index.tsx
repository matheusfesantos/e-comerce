import Image from "next/image"
import "./styles.css"

export default function HeroSection() {
  return (
    <section className="secao-principal">
      <div className="secao-container">
        <div className="secao-principal-conteudo">
          <div className="secao-principal-texto">
            <h1 className="titulo-principal">Descubra Sua Fragrância Exclusiva</h1>
            <p className="descricao-principal">
              Explore nossa coleção selecionada de fragrâncias premium que capturam a essência da elegância e
              individualidade.
            </p>
            <div className="botoes-principal">
              <button className="botao-primario">Comprar Agora</button>
            </div>
          </div>
          <div className="secao-principal-imagem">
            <div className="imagem-destaque-container">
              <Image
                src="/images/produtos/perfume-destaque.png"
                alt="Perfume em destaque"
                width={300}
                height={300}
                className="imagem-destaque"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

