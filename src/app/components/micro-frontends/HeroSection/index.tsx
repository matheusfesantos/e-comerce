import Image from "next/image"
import Logo from "../../../../../public/images/logo/essence-logo.png"
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
              <button className="botao-primario">
                <a
                  href="https://wa.me/5519986126226?text=Ola%2C%20gostaria%20de%20comprar%20seu%20produtos"
                  className="botao-primario"
                >
                  Comprar Agora
                </a></button>
            </div>
          </div>
          <div className="secao-principal-imagem">
            <div className="imagem-destaque-container">
              <Image
                src={Logo}
                alt="Maju Cosméticos"
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