import Nav from "../components/Nav";
import ProductSection from "../components/ProductsSection";
import Slider from "../components/Slider";
function Homepage() {
  return (
    <div className="grid">
      <Nav />
      <Slider />
      <ProductSection />
    </div>
  );
}

export default Homepage;
