import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Sticky from "react-stickynode";
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu
    
  } from "reactstrap";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Menu,
  Tooltip,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomNavbar(props) {
  const history = useHistory();
  var { mClass, nClass, cClass, slogo, hbtnClass } = props;
  const username = localStorage.getItem("Firstname");
  const role = localStorage.getItem("Role");
  const img = localStorage.getItem("Avatar");

  const [connected, setConnected] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (username === null) {
      setConnected(false);
    } else {
      setConnected(true);
    }
  });

  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const myAccountPath = () => {
    if (role === "Supporter") {
      history.push("/EntrepriseInterface");
    }
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
            <img src={require("../img/greenta web.png")} alt=""/>
            <img style={{width: "175px"}} src={require("../img/greenta web.png")} alt="logo"/>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link to="/home" className="nav-link dropdown-toggle">
                    Home
                  </Link>
                </li>

                <li className="dropdown submenu nav-item">
                  <Link to="/Service" className="dropdown-toggle nav-link">
                    Services
                  </Link>
                </li>
              

                <li className="nav-item">
                  <NavLink title="About" className="nav-link" to="/About">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink title="About" className="nav-link" to="/ourTeam">
                     Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
                <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></li>
                                        <li className="nav-item"><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></li>
                                        <li className="nav-item"><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></li>
                                    </ul>
                </li>
              </ul>
              
              {connected ? (
                <>
                 

                  <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">Welcome {username}</span>
                <span>
                  <img alt="Profile" src={img} />
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Mile stones</DropdownItem>
                <DropdownItem>History</DropdownItem>
       
                <DropdownItem divider />
                <DropdownItem   onClick={() => Logout()}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
                </>
              ) : (
                <Link
                  to="/SignIn"
                  className={`btn_get btn_hover ${hbtnClass}`}
                >
                  Sign Up / Sign in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
}
