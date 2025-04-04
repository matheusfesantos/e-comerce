"use client";

import "./styles.css"
import ProductCard from "./ProductCard"
import { useState } from "react";

interface Produto {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
}

export default function ProductsSection() {

  const [itensNoCarrinho, setItensNoCarrinho] = useState<Produto[]>([]);

  const products = [
    {
      id: 1,
      name: "Show de Banho",
      type: "Shampoo",
      price: "R$ 49,99",
      image: "/images/produtos/show-de-banho.jpeg",
    },
    {
      id: 2,
      name: "Sabonete em Barra",
      type: "Sabonete",
      price: "R$ 39,99",
      image: "/images/produtos/sabonete-em-barra-vegetal.jpeg",
    },
    {
      id: 3,
      name: "Creme de Corpo",
      type: "Creme",
      price: "R$ 79,99",
      image: "/images/produtos/creme-de-copro.jpeg",
    },
    {
      id: 4,
      name: "Nutricão Prebióbica",
      type: "Creme de",
      price: "R$ 29,99",
      image: "/images/produtos/natruicao_prebiobica.jpeg",
    },
    {
      id: 5,
      name: "Cuide-se Bem",
      type: "Sabonete",
      price: "R$ 29,99",
      image: "/images/produtos/cuide-se-bem.jpeg",
    },
    {
      id: 6,
      name: "Desodorante",
      type: "Desodorante",
      price: "R$ 29,99",
      image: "/images/produtos/desodorante.jpeg",
    },
  ]

  const adicionarAoCarrinho = (product: Produto) => {
    setItensNoCarrinho((prevItens) => [...prevItens, product]);
  };  

  return (
    <section className="secao-produtos">
      <div className="secao-container">
        <h2 className="titulo-secao">Nosso portifólio de vendas</h2>

        <div className="grade-produtos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              type={product.type}
              price={product.price}
              image={product.image}
              onAddToCart={() => adicionarAoCarrinho(product)}
            />
          ))}
        </div>

        {itensNoCarrinho.length > 0 && (
          <div>
            <p className="produtos-selecionados">
              {itensNoCarrinho.length} item no seu carrinho</p>
            <div className="botao-finalizar-compra">
              <button>Comprar</button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}