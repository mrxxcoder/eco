import { useProducts } from "../contexts/ProductsContext";

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
    <div className="min-h-cart flex items-center justify-between bg-gray-200 even:bg-slate-50 px-8 lg:p-4 lg:flex-col lg:gap-5">
      <div className="flex items-center w-2/5 lg:w-full md:flex-col gap-5">
        <div className="w-40 h-32 overflow-hidden flex justify-center items-center">
          <img
            className="w-full h-full mix-blend-multiply"
            src={image}
            alt="product img"
          />
        </div>
        <div className="max-w-2/5">
          <h1>{title}</h1>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-around w-full md:flex-col">
        <div className="flex items-center gap-3">
          <button
            className="border-none outline-none bg-transparent text-3xl m-2.5 cursor-pointer"
            onClick={() => handleDecrement(id)}
          >
            -
          </button>
          <p className="text-lg font-bold border border-solid border-slate-300 px-8 py-1.5 rounded">
            {productQuantities[id]}
          </p>
          <button
            className="border-none outline-none bg-transparent text-3xl m-2.5 cursor-pointer"
            onClick={() => handleIncrement(id)}
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-around pl-12 w-4/6 md:flex-col md:pl-0">
          <div className="text-2xl mt-2">${totalProductPrice.toFixed(2)}</div>
          <button className="text-3xl mt-2" onClick={() => removeFromCart(id)}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
