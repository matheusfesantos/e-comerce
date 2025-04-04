"use client";

import "./styles.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface Produto {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
}

interface ProdutoComQuantidade extends Produto {
  quantity: number;
}

export default function ProductsSection() {
  const [itensNoCarrinho, setItensNoCarrinho] = useState<Produto[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const products: Produto[] = [
    {
      id: 1,
      name: "Show de Banho",
      type: "Natura",
      price: "R$ 49,99",
      image: "/images/produtos/show-de-banho.jpeg",
    },
    {
      id: 2,
      name: "Sabonete em Barra",
      type: "Natura",
      price: "R$ 39,99",
      image: "/images/produtos/sabonete-em-barra-vegetal.jpeg",
    },
    {
      id: 3,
      name: "Creme de Corpo",
      type: "Natura",
      price: "R$ 79,99",
      image: "/images/produtos/creme-de-copro.jpeg",
    },
    {
      id: 4,
      name: "Nutricão Prebióbica",
      type: "Natura",
      price: "R$ 29,99",
      image: "/images/produtos/natruicao_prebiobica.jpeg",
    },
    {
      id: 5,
      name: "Cuide-se Bem",
      type: "Natura",
      price: "R$ 29,99",
      image: "/images/produtos/cuide-se-bem.jpeg",
    },
    {
      id: 6,
      name: "Desodorante",
      type: "Natura",
      price: "R$ 29,99",
      image: "/images/produtos/desodorante.jpeg",
    },
  ];

  const adicionarAoCarrinho = (product: Produto) => {
    setItensNoCarrinho((prevItens) => [...prevItens, product]);
  };

  return (
    <section className="secao-produtos">
      <div className="secao-container">
        <h2 className="titulo-secao">Nosso portfólio de vendas</h2>

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
  <div className={show ? 'fade-in' : ''}>
    <div className="produtos-selecionados">
      <p>{itensNoCarrinho.length} itens no seu carrinho</p>

      <div>
        <p>Produtos:</p>
        {Object.values(
          itensNoCarrinho.reduce(
            (acc: Record<number, ProdutoComQuantidade>, product) => {
              if (!acc[product.id]) {
                acc[product.id] = { ...product, quantity: 0 };
              }
              acc[product.id].quantity += 1;
              return acc;
            },
            {}
          )
        ).map((product) => (
          <p key={product.id}>
            {product.name} - {product.price} - {product.type} (
            {product.quantity}) -{" "}
            {(
              parseFloat(
                product.price.replace("R$", "").replace(",", ".")
              ) * product.quantity
            ).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        ))}
      </div>

      <p>
        <strong>Total:</strong>{" "}
        {itensNoCarrinho
          .reduce(
            (acc, product) =>
              acc +
              parseFloat(product.price.replace("R$", "").replace(",", ".")),
            0
          )
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>

      <div className="botao-finalizar-compra">
        <a
          href="https://wa.me/5519986126226?text=Olá%2C%20gostaria%20de%20comprar%20seus%20produtos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Comprar</button>
        </a>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
}