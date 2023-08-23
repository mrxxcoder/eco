import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { BsCartFill } from "react-icons/bs";
import { useProducts } from "../contexts/ProductsContext";

function Nav() {
  const { cartProducts } = useProducts();
  return (
    <nav className={styles.nav}>
      <Link to="/">ECO</Link>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link className={styles.cartIcon} to="/cart">
            <p>{cartProducts.length}</p>
            <BsCartFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
