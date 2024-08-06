import { Link } from "react-router-dom";

function Header() {
  return ( 
    <header className="flex p-5 bg-blue-500  justify-center items-center gap-10 text-white">
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </header>
   );
}

export default Header;