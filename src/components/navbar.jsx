import { FaPizzaSlice } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { TbSalad } from "react-icons/tb";
import { GiHotSpices } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navigations">
        <a href="#">
          <IoFastFood />
          All
        </a>
        <a href="#">
          {" "}
          <RiDrinks2Fill />
          Drinks
        </a>
        <a href="#">
          {" "}
          <FaPizzaSlice /> Pizza
        </a>
        <a href="#">
          {" "}
          <TbSalad />
          Salad
        </a>
        <a href="#">
          {" "}
          <GiHotSpices />
          Spicy
        </a>
        <a href="#">
          <GiCupcake />
          Sweets
        </a>
      </div>
      <div className="btn">
        <button>View All</button>
      </div>
    </div>
  );
};

export default Navbar;
