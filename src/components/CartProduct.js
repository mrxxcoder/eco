import { useProducts } from "../contexts/ProductsContext";
import styles from "./CartProduct.module.css";

function CartProduct({ title, price, image, id }) {
  const { productQuantities, setProductQuantities, removeFromCart } =
    useProducts();

  function handleIncrement(productId) {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  }

  function handleDecrement(productId) {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, prevQuantities[productId] - 1),
    }));
  }

  let totalProductPrice = productQuantities[id] * price;

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgBox}>
        <div className={styles.image}>
          <img src={image} alt="product img" />
        </div>
        <div className={styles.info}>
          <h1>{title}</h1>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.amount}>
          <button onClick={() => handleDecrement(id)}>-</button>
          <p>{productQuantities[id]}</p>
          <button onClick={() => handleIncrement(id)}>+</button>
        </div>
        <div className={styles.price}>
          <div className={styles.productTotal}>
            ${totalProductPrice.toFixed(2)}
          </div>
          <button onClick={() => removeFromCart(id)}>&times;</button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
