import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>
    </header>
  );
};

export default Header;
