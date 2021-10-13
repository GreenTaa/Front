import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { disconnectUser } from "./redux/connect/connectActions";
import Sticky from "react-stickynode";
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Row
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
  const dispatch = useDispatch();
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
    dispatch(disconnectUser())
  };

  const Myaccount = () => {
    if (role === "Supporter") {
      history.push("/supporterinterface");
    }
  };

  const MyCard = () =>{
    if (role === "Supporter") {
      history.push("/card");
    }
  }

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
            <img style={{width: "175px"}} src={require("../img/greenta web.png")} alt=""/>
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
                    Accueil
                  </Link>
                </li>
                {connected ? 
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link to="/store" className="nav-link dropdown-toggle">
                    Store
                  </Link>
                </li>
                : ""}
                <li className="dropdown submenu nav-item">
                  <Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Services</Link>
                    <ul role="menu" className=" dropdown-menu">
                        <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/service-supporter'>Services aux supporters</NavLink></li>
                        <li className="nav-item"><NavLink title="Portfolio 3" className="nav-link" to='/service-team'>Services aux clubs sportifs</NavLink></li>
                        <li className="nav-item"><NavLink title="Portfolio Fullwidth" className="nav-link" to='/service-center'>Services aux centres de collectes</NavLink></li>
                    </ul>
                </li>
                
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              
              
              {connected ? (
                <>
                 
                <Row>
            <div className="user d-inline-block container" >
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">Bienvenue {username}</span>
                <span>
                  <img alt="Profile" src={img} />
                </span>
              </DropdownToggle>
              <img style={{width :"35px", height : "35px"}} onClick={() => history.push("/whishlist") } alt="Profile" src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630925384/teams/p9ml46rx0rximg2reyqc.png" />
              <DropdownMenu className="mt-3" right>
                <DropdownItem onClick={() => Myaccount()} >Account</DropdownItem>
                <DropdownItem>Mile stones</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem  onClick={() => MyCard()}>Card</DropdownItem>
                
                <DropdownItem divider />
                <DropdownItem   onClick={() => Logout()}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </div>
          </Row>
                </>
              ) : (
                <>
                <div style={{marginRight : "-15%"}}>
                <Row >
                <Link
                  to="/SignIn"
                  className={`btn_get btn_hover ${hbtnClass}`}
                  style={{marginRight : "-10%"}}
                >
                 Sign In
                </Link>
                <div className="dropdown">
                <button className="btn_get btn_hover" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sign Up
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="SignUpTeam">Team</a>
                  <a className="dropdown-item" href="/SignUp">Supporter</a>
                  <a className="dropdown-item" href="SignUpCenter">Collect Center</a>
                </div>
              </div>
              </Row>
              </div>
               </> 
              )}
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
}
