import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";

const ProductsContext = createContext();
function ProductsProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState("all");
  const filteredProducts =
    filterByCategory === "all"
      ? products
      : products.filter((product) => product.category === filterByCategory);

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(true);
      }
    }

    fetchProducts();
  }, []);

  async function fetchProduct(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/products/${id}`);
      const data = await res.json();
      setCurrentProduct(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(true);
    }
  }

  function handleChange(e) {
    setFilterByCategory(e.target.value);
  }

  function addToCart(product, chosenQuantity) {
    const existingProductIndex = cartProducts.findIndex(
      (item) => item.id === product.id
    );

    const updatedCartProducts = [...cartProducts];
    const updatedQuantities = { ...productQuantities };
    if (existingProductIndex !== -1) {
      setCartProducts(updatedCartProducts);

      updatedQuantities[product.id] += 1;
      setProductQuantities(updatedQuantities);
    } else {
      setCartProducts([...cartProducts, { ...product }]);
      setProductQuantities({
        ...productQuantities,
        [product.id]: chosenQuantity || 1,
      });
    }
  }

  function removeFromCart(id) {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id !== id
    );

    const updatedQuantities = { ...productQuantities };
    delete updatedQuantities[id];

    setCartProducts(updatedCartProducts);
    setProductQuantities(updatedQuantities);
  }

  function clearCart() {
    setCartProducts([]);
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        filterByCategory,
        handleChange,
        filteredProducts,
        currentProduct,
        setCurrentProduct,
        addToCart,
        cartProducts,
        productQuantities,
        setProductQuantities,
        removeFromCart,
        clearCart,
        fetchProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");
  return context;
}

export { ProductsProvider, useProducts };
