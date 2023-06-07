import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  }, []);

  return (
    <>
      <Header />
      <h2>Products</h2>
      <section className="products-section">
        {products?.map((elm, index) => (
          <div key={index} className="product-item">
            <h2>{elm.title}</h2>
            <img src={elm.image} alt="img" />
            <h2>{elm.price}</h2>
            <Link to={`/${elm.id}`}> Read More</Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductsSection;
