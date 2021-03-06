import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./helpers/Firebase";
import AppLocale from "./lang";
import ColorSwitcher from "./components/common/ColorSwitcher";
import NotificationContainer from "./components/common/react-notifications/NotificationContainer";
import { isMultiColorActive } from "./constants/defaultValues";
import main from "./views";
import app from "./views/app";
import user from "./views/user";
import error from "./views/error";
import { Home } from "./Pages/Home";
import DigitalMarketing from "./Pages/Digital-marketing";
import PaymentProcessing from "./Pages/Payment-processing";
import HRManagement from "./Pages/HR-Management";
import Startup from "./Pages/Startup";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Process from "./Pages/Process";
import ServiceSupporter from "./Pages/ServiceSupporter";
import ServiceTeam from "./Pages/ServiceTeam";
import ServiceCenter from "./Pages/ServiceCenter";
import Team from "./Pages/Team";
import Portfolio2col from "./Pages/Portfolio-2col";
import Portfolio3col from "./Pages/Portfolio-3col";
import Portfoliofull4col from "./Pages/Portfolio-fullwidth-4col";
import PortfolioSingle from "./Pages/PortfolioSingle";
import Bloglist from "./Pages/Bloglist";
import BlogSingle from "./Pages/BlogSingle";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Landing from "./Pages/Landing";
import homesupport from "./Pages/home-support";
import homeERP from "./Pages/Home-ERP";
import homeHosting from "./Pages/HomeHosting";
import homeSecurity from "./Pages/HomeSecurity";
import homeSoftwareDark from "./Pages/Home-software-dark";
import HomeAppShowcase from "./Pages/Home-app-showcase";
import HomeCloud from "./Pages/Home-cloud";
import HomeTracking from "./Pages/Home-tracking";
import HomeEvent from "./Pages/Home-event";
import HomeChat from "./Pages/Home-chat";
import Price from "./Pages/Price";
import Faq from "./Pages/Faq";
import ServiceDetails from "./Pages/ServiceDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BlogGridPage from "./Pages/BlogGridPage";
import { Provider } from 'react-redux'
import store from './components/redux/store'
import test from './views/app/index'
import login from "./views/user/login";
import { useHistory } from "react-router-dom";
import ResetNewPassword from "./Pages/ResetNewPassword";
import ResetPassword from "./Pages/ResetPassword";
import maptest from "./components/trash/addtrash";
import newprofile from "./components/UserComponents/newprofile";

import SignUpTeam from "./Pages/SignUpTeam";
import SignUpCenter from "./Pages/SignUpCenter"
import SupporterInterface from "./Pages/Users/SupporterInterface"
import dashboardTeam from "./views/app/dashboards/dashboardteam"
import dashboardCenter from "./views/app/dashboards/dashboardcenter"
/* import Store from './Pages/Store' */
import Produits from './views/app/pages/produits'
import Store from './views/app/pages/store'
import whishlist  from "./views/app/pages/whishlist";
import card  from "./views/app/pages/buy";

const AuthRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.Role ==="Team" |localStorage.Role ==="Center" | localStorage.Role ==="Admin" ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/home"
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    const { locale, loginUser } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div>
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Router>
              <Switch>
                <AuthRoute path="/app" authUser={loginUser} component={app} />
                <Route path="/error" exact component={error} />
                <Route path="/log" exact component={login} />
                <Route path="/SupporterInterface" exact component={SupporterInterface} />
                <AuthRoute path="/" exact component={main} />

          <ScrollToTopRoute
            path="/Digital-marketing"
            component={DigitalMarketing}
          />
          <ScrollToTopRoute
            path="/Payment-processing"
            component={PaymentProcessing}
          />

<ScrollToTopRoute path="/newprofile" component={newprofile} />

                    <ScrollToTopRoute path="/home" component={DigitalMarketing} />
                    <ScrollToTopRoute path="/ResetNewPassword/:id" component={ResetNewPassword  } />
                    <ScrollToTopRoute path="/Resetpassword" component={ResetPassword  } />
          <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute path="/About" component={About} />
          <ScrollToTopRoute path="/Service" component={Service} />
          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute path="/Team" component={Team} />
          <ScrollToTopRoute path="/Portfolio-2col" component={Portfolio2col} />
          <ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />
          <ScrollToTopRoute path="/store" component={Store} />
          <ScrollToTopRoute path="/whishlist" component={whishlist} />
          <ScrollToTopRoute path="/card" component={card} />
          <ScrollToTopRoute path="/produits" component={Produits} />
          <ScrollToTopRoute
            path="/Portfolio-fullwidth-4col"
            component={Portfoliofull4col}
          />
          <ScrollToTopRoute
            path="/PortfolioSingle"
            component={PortfolioSingle}
          />
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />
          <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute path="/Landing" component={Landing} />
          <ScrollToTopRoute path="/home-support" component={homesupport} />
          <ScrollToTopRoute path="/HomeHosting" component={homeHosting} />
          <ScrollToTopRoute path="/Home-ERP" component={homeERP} />
          <ScrollToTopRoute path="/HomeSecurity" component={homeSecurity} />
          <ScrollToTopRoute
            path="/HomeAppShowcase"
            component={HomeAppShowcase}
          />
          <ScrollToTopRoute
            path="/Home-software-dark"
            component={homeSoftwareDark}
          />
          <ScrollToTopRoute path="/Home-cloud" component={HomeCloud} />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute path="/Home-event" component={HomeEvent} />
          <ScrollToTopRoute path="/Home-chat" component={HomeChat} />
          <ScrollToTopRoute path="/Price" component={Price} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} />
          <ScrollToTopRoute path="/SignUpTeam" component={SignUpTeam} />
          <ScrollToTopRoute path="/SignUpCenter" component={SignUpCenter} />
          <ScrollToTopRoute path="/Service-Supporter" component={ServiceSupporter} />
          <ScrollToTopRoute path="/Service-Team" component={ServiceTeam} />
          <ScrollToTopRoute path="/Service-Center" component={ServiceCenter} />
          <ScrollToTopRoute path="/dashboard-team" component={dashboardTeam} />
          <ScrollToTopRoute path="/dashboard-center" component={dashboardCenter} />
          <Redirect to="/error" />

              </Switch>
            </Router>
          </React.Fragment>
        </IntlProvider>
      </div>
      </div>
      );
  }
}

const mapStateToProps = ({ authUser, settings }) => {
  const { user: loginUser } = authUser;
  const { locale } = settings;
  return { loginUser, locale };
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
