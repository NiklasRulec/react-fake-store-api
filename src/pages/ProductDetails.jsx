import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const idParams = useParams();
  console.log(idParams);

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

  const productDetails = products?.filter((elm) => {
    return elm.id.toString() === idParams.productid;
  });

  console.log("Filter", productDetails);

  return (
    <>
      <Header />
      {products ? (
        <section className="product-details">
          <article className="product-wrapper">
            <h1>{productDetails[0].title}</h1>
            <img src={productDetails[0].image} alt="img" />
            <h2>{productDetails[0].price}€</h2>
            <h2>{productDetails[0].description}</h2>
          </article>
        </section>
      ) : (
        <h1>Product wird geladen</h1>
      )}
    </>
  );
};

export default ProductDetails;
