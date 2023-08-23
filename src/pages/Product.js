import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductsContext";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { fetchProduct, currentProduct, addToCart } = useProducts();

  useEffect(
    function () {
      fetchProduct(id);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  function handleIncrease() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrease() {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  }

  function handleAddToCart() {
    addToCart(currentProduct, quantity);
  }

  const { image, title, description, price } = currentProduct;
  return (
    <div>
      <Nav />
      <section className="p-36 lg:p-8 md:p-5 flex md:flex-col gap-5">
        <div className="basis-1/2 md:flex-1 mt-16">
          <img className="" src={image} alt="product img" />
        </div>
        <div className="basis-1/2 md:flex-1 mt-16">
          <h1 className="mb-8 text-3xl font-bold">{title}</h1>
          <p className="text-lg md:text-xl">{description}</p>

          <div className="flex items-center gap-x-5 mb-8 mt-16">
            <button
              className="border-none outline-none bg-transparent text-xl m-2.5 cursor-pointer"
              onClick={handleDecrease}
            >
              -
            </button>
            <p className="text-xl font-medium border-2 py-1.5 px-8 rounded-md">
              {quantity}
            </p>
            <button
              className="border-none outline-none bg-transparent text-xl m-2.5 cursor-pointer"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <p className="text-3xl font-medium mt-16">${price}</p>
          <button className="btn btn-primary mt-8" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default Product;
