import CartList from "../components/CartList";
import Message from "../components/Message";
import Nav from "../components/Nav";
import { useProducts } from "../contexts/ProductsContext";
import styles from "./Cart.module.css";

function Cart() {
  const { clearCart, cartProducts } = useProducts();
  return (
    <section>
      <Nav />
      {cartProducts.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.total}>
            {cartProducts.length > 0 && (
              <button className="btn btn-primary mb-4" onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>
          <CartList />
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary" disabled>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <Message message="Your cart is empty. Start adding some products to your cart 😀" />
      )}
    </section>
  );
}

export default Cart;
