import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import {  NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale
} from "../../redux/actions";

import {
  menuHiddenBreakpoint,
  searchPath
} from "../../constants/defaultValues";

import { MobileMenuIcon, MenuIcon } from "../../components/svg";
import TopnavNotifications from "./Topnav.Notifications";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInFullScreen: false,
      searchKeyword: ""
    };
  }
  handleChangeLocale = locale => {
    this.props.changeLocale(locale);
  };
  isInFullScreen = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };
  handleSearchIconClick = e => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains("search")) {
        if (e.target.parentElement.classList.contains("search")) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains("search")
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains("mobile-view")) {
        this.search();
        elem.classList.remove("mobile-view");
        this.removeEventsSearch();
      } else {
        elem.classList.add("mobile-view");
        this.addEventsSearch();
      }
    } else {
      this.search();
    }
  };
  addEventsSearch = () => {
    document.addEventListener("click", this.handleDocumentClickSearch, true);
  };
  removeEventsSearch = () => {
    document.removeEventListener("click", this.handleDocumentClickSearch, true);
  };

  handleDocumentClickSearch = e => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains("navbar") ||
        e.target.classList.contains("simple-icon-magnifier"))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains("simple-icon-magnifier")) {
        this.search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains("search")
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector(".mobile-view");
      if (input && input.classList) input.classList.remove("mobile-view");
      this.removeEventsSearch();
      this.setState({
        searchKeyword: ""
      });
    }
  };
  handleSearchInputChange = e => {
    this.setState({
      searchKeyword: e.target.value
    });
  };
  handleSearchInputKeyPress = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  search = () => {
    this.props.history.push(searchPath + "/" + this.state.searchKeyword);
    this.setState({
      searchKeyword: ""
    });
  };

  toggleFullScreen = () => {
    const isInFullScreen = this.isInFullScreen();

    var docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    this.setState({
      isInFullScreen: !isInFullScreen
    });
  };

  handleLogout = () => {
    window.localStorage.clear();
    window.location.href =  "/home";
  };

  menuButtonClick = (e, menuClickCount, containerClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("resize", false, false);
      window.dispatchEvent(event);
    }, 350);
    this.props.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.props.selectedMenuHasSubItems
    );
  };
  mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    this.props.clickOnMobileMenu(containerClassnames);
  };

  render() {
    const { containerClassnames, menuClickCount, locale } = this.props;
    const { messages } = this.props.intl;
    return (
      <nav className="navbar fixed-top">
        <NavLink
          to="#"
          className="menu-button d-none d-md-block"
          onClick={e =>
            this.menuButtonClick(e, menuClickCount, containerClassnames)
          }
        >
          <MenuIcon />
        </NavLink>
        <NavLink
          to="#"
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
          onClick={e => this.mobileMenuButtonClick(e, containerClassnames)}
        >
          <MobileMenuIcon />
        </NavLink>
        <a className="navbar-logo" href="/">
          <span className="logo d-none d-xs-block" />
          <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630662305/supporter/nn9kzh4bmqtdjwnvvqc2.png" height="94px" width="200px"/>
        </a>

        <div className="ml-auto">
          <div className="header-icons d-inline-block align-middle">
            
            <button
              className="header-icon btn btn-empty d-none d-sm-inline-block"
              type="button"
              id="fullScreenButton"
              onClick={this.toggleFullScreen}
            >
              {this.state.isInFullScreen ? (
                <i className="simple-icon-size-actual d-block" />
              ) : (
                <i className="simple-icon-size-fullscreen d-block" />
              )}
            </button>
          </div>
          <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">{localStorage.getItem("Name")}</span>
                <span>
                {localStorage.getItem("Role")==='Team' ? (
                  <img alt="Profile" src= {localStorage.getItem("Picture")}/>
                  ) : (
                <img alt="Profile" src='https://w1.pngwing.com/pngs/667/708/png-transparent-plastic-bag-waste-recycling-electronic-waste-recycling-symbol-recycling-bin-computer-recycling-waste-management.png' />
                )}
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Features</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Support</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.handleLogout()}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    { setContainerClassnames, clickOnMobileMenu, logoutUser, changeLocale }
  )(TopNav)
);
