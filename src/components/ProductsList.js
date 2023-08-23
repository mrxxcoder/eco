import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
      {products.map((product) => (
        <ProductItem
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          id={product.id}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductsList;
