// filepath: c:\Users\Lenovo\Desktop\e-comerce\src\app\components\micro-frontends\ProductsSection\ProductCard.tsx
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductCardProps {
  name: string;
  type: string;
  price: string;
  image: string;
  onAddToCart: () => void;
}

export default function ProductCard({ name, type, price, image, onAddToCart }: ProductCardProps) {

  const notificationSucessAddToCart = () => {
    toast.success("Produto adicionado ao carrinho!", {
      style: { backgroundColor: "#6e8964", color: "#FFF" },
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="produto-card">
      <div className="produto-conteudo">
        <div className="produto-imagem-container">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={200}
            height={200}
            className="produto-imagem"
          />
        </div>
        <h3 className="produto-titulo">{name}</h3>
        <p className="produto-subtitulo">{type}</p>
        <p className="produto-preco">{price}</p>

        <button
          className="botao-produto"
          onClick={() => {
            onAddToCart();
            notificationSucessAddToCart();
          }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}