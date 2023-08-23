import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";

function ProductItem({ title, price, description, image, product, id }) {
  const location = useLocation();
  const { setCurrentProduct, addToCart } = useProducts();
  const filteredDescription =
    description.split(" ").length > 10
      ? description.split(" ").slice(0, 10).join(" ")
      : description;

  const linkToProduct = location.pathname.includes("products")
    ? `/products/${id}`
    : `/products/${id}`;

  function handleAddToCart() {
    setCurrentProduct(product);
    addToCart(product);
  }
  return (
    <div className="card sm:w-full bg-base-100 shadow-xl">
      <figure className="pt-8">
        <img src={image} alt="Shoes" className="h-56" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{filteredDescription}</p>
        <p className="text-xl font-bold">${price}</p>
        <div className="card-actions justify-between pt-4">
          <Link className="btn btn-secondary" to={linkToProduct}>
            Details
          </Link>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
