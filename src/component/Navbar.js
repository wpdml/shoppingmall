import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["All", "Tops", "Bottoms", "Accessories", "Bags", "Shoes"];

  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log("keyword", keyword);

      navigate(`/?q=${keyword}`);
    }
  };

  const handleMenuClick = (category) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("category", category === "All" ? "" : category);
    navigate(`/?${queryParams.toString()}`)
  }

  return (
    <div>
      <div className="navbar">
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch}/>
        <input type="text" onKeyPress={(event) => search(event)} className="search-bar"/>
      </div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <div>{authenticate ? "Logout" : "Login"}</div>
      </div>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu} onClick={()=> handleMenuClick(menu)}>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
