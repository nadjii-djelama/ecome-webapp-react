import React from "react";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  const products = getProducts();

  return (
    <>
      <div className="page">
        <div className="home-hero">
          <h1 className="home-title">Welcome in ShopHub</h1>
          <p className="home-subtitles">
            Discover amazing products at great prices
          </p>
        </div>
        <div className="container">
          <h2 className="page-title">Our products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-image"
                />
                <div className="product-card-content">
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-description">
                    {product.description}
                  </p>
                  <p className="product-card-price">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="product-card-actions">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                    <button className="btn btn-secondary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
