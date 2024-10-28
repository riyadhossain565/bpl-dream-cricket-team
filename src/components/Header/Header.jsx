import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";
import PropTypes from "prop-types";

const Header = ({ coins }) => {
  return (
    <div className="flex justify-between items-center w-5/6 mx-auto my-6 ">
      {/* Logo */}
      <a href="">
        <img src={logo} alt="" />
      </a>
      {/* Menu Start*/}
      <div className="flex items-center gap-8">
        <ul className="flex gap-5">
          <li className="text-gray-500">
            <a href="">Home</a>
          </li>
          <li className="text-gray-500">
            <a href="">Fixture</a>
          </li>
          <li className="text-gray-500">
            <a href="">Teams</a>
          </li>
          <li className="text-gray-500">
            <a href="">Scheduals</a>
          </li>
        </ul>
        <div className="flex gap-2 items-center border p-2 rounded-lg">
          <p className="font-bold">{coins}</p>
          <span className="font-bold">Coin</span>
          <img src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Header;
