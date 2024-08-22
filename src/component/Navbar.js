import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


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

const navigate = useNavigate()
const goToLogin=()=>{
    navigate("/login")
}

  return (
    <div>
      <div class="login-button" onClick={goToLogin}>
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
            <input type="text" style={{ borderRadius: '15px', padding: '5px 10px', border: '1px solid #ccc', outline: 'none' }}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
