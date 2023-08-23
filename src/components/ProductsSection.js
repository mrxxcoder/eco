import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import styles from "./ProductList.module.css";
import ProductsList from "./ProductsList";

function ProductSection() {
  const { products } = useProducts();
  const initialProducts = products.slice(0, 4);
  return (
    <section className="p-12 lg:p-10 md:p-8 md:mx-auto">
      <h1 className={`${styles.popularHeading} font-bold uppercase text-2xl`}>
        Most Popular Items
      </h1>
      <ProductsList products={initialProducts} />
      <div className="flex justify-center pt-24">
        <Link to="/products" className="btn btn-primary w-36">
          See All
        </Link>
      </div>
    </section>
  );
}

export default ProductSection;
