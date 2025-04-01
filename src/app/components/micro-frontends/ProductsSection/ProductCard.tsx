import Image from "next/image"

interface ProductCardProps {
  name: string
  type: string
  price: string
  image: string
  onAddToCart: () => void;
}

export default function ProductCard({ name, type, price, image, onAddToCart }: ProductCardProps) {

  const phoneNumber = "5519986126226";
  const message = encodeURIComponent("Ola, gostaria de comprar seu produtos");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="produto-card">

      <div className="produto-conteudo">
        <div className="produto-imagem-container">
          <Image src={image || "/placeholder.svg"} 
          alt={name} width={200} height={200} className="produto-imagem" />
        </div>
        <h3 className="produto-titulo">{name}</h3>
        <p className="produto-subtitulo">{type}</p>
        <p className="produto-preco">{price}</p>

        <button className="botao-produto" onClick={onAddToCart}>Adicionar ao Carrinho</button>
      </div>

    </div>
  )
}