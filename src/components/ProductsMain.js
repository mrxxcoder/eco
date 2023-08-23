import { useProducts } from "../contexts/ProductsContext";
import ProductsList from "./ProductsList";

function ProductsMain() {
  const { filteredProducts, filterByCategory, handleChange } = useProducts();
  return (
    <section className="p-24 lg:p-20 md:p-10 sm:p-5">
      <div className="mb-16">
        <label className="block">Filter By Category</label>
        <select
          value={filterByCategory}
          className="select select-bordered mt-4"
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <ProductsList products={filteredProducts} />
    </section>
  );
}

export default ProductsMain;
