import "./styles.css"
import ProductCard from "./ProductCard"

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Elegância Floral",
      type: "Eau de Parfum",
      price: "R$ 449,99",
      image: "/images/produtos/perfume-floral.png",
    },
    {
      id: 2,
      name: "Brisa Cítrica",
      type: "Eau de Toilette",
      price: "R$ 399,99",
      image: "/images/produtos/perfume-citrico.png",
    },
    {
      id: 3,
      name: "Notas Amadeiradas",
      type: "Eau de Parfum",
      price: "R$ 479,99",
      image: "/images/produtos/perfume-amadeirado.png",
    },
    {
      id: 4,
      name: "Essência Oriental",
      type: "Parfum",
      price: "R$ 529,99",
      image: "/images/produtos/perfume-oriental.png",
    },
  ]

  return (
    <section className="secao-produtos">
      <div className="secao-container">
        <h2 className="titulo-secao">Fragrâncias em Destaque</h2>

        <div className="grade-produtos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              type={product.type}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

