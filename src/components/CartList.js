import { useProducts } from "../contexts/ProductsContext";
import CartProduct from "./CartProduct";

function CartList() {
  const { cartProducts } = useProducts();
  return (
    <div>
      {cartProducts.map((product) => (
        <CartProduct
          title={product.title}
          price={product.price}
          image={product.image}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default CartList;
