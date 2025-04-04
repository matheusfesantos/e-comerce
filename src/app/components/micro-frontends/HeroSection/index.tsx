import Image from "next/image"
import Logo from "../../../../../public/images/logo/essence-logo.png"
import "./styles.css"


export default function HeroSection() {

  const phoneNumber = "5519986126226";
  const message = encodeURIComponent("Ola, gostaria de comprar seu produtos");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

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
<<<<<<< HEAD
                src={Logo}
                alt="Logo"
=======
                src="/images/logo/maju-logo.png"
                alt="Maju Cosméticos"
>>>>>>> ee7f014840dac454b8f393615121609f2c1a538f
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