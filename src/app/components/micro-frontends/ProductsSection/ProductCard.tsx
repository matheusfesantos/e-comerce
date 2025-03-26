import Image from "next/image"

interface ProductCardProps {
  name: string
  type: string
  price: string
  image: string
}

export default function ProductCard({ name, type, price, image }: ProductCardProps) {
  return (
    <div className="produto-card">
      <div className="produto-conteudo">
        <div className="produto-imagem-container">
          <Image src={image || "/placeholder.svg"} alt={name} width={200} height={200} className="produto-imagem" />
        </div>
        <h3 className="produto-titulo">{name}</h3>
        <p className="produto-subtitulo">{type}</p>
        <p className="produto-preco">{price}</p>
        <button className="botao-produto">Adicionar ao Carrinho</button>
      </div>
    </div>
  )
}

