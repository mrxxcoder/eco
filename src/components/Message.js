import { Link } from "react-router-dom";

function Message({ message }) {
  return (
    <div className="text-5xl md:text-4xl sm:text-3xl text-center mt-24 p-8">
      <p className="mb-10">{message}</p>
      <Link to="/products" className="btn btn-primary">
        Start shopping
      </Link>
    </div>
  );
}

export default Message;
