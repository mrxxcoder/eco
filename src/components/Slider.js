import { Link } from "react-router-dom";

function Slider() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold sm:text-4xl">Hello there</h1>
          <p className="mb-5 sm:text-lg">
            This an ecommerce shop where you can find the unique items you are
            looking for in clothes, electronics
          </p>
          <Link to="/products" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider;
