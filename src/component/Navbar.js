import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const menuList = [
    "Women",
    "Divided",
    "Men",
    "Newborn",
    "Kids",
    "H&M Home",
    "Sale",
    "Sustainability",
  ];
  return (
    <div>
      <div class="login-button">
        <div>
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={200}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
          alt="H&M Logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
