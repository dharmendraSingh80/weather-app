import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="nav">
      <div>
        <Link to="/">Cloudie</Link>
      </div>
      <div>
        <Link to="/forcast">See 5 days weather Condition</Link>
      </div>
    </header>
  );
};

export default Navbar;
