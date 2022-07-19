import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crown } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/">
          <div className="logo-container">
            <Crown className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
