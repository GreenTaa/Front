import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";
import dashboards from "./dashboards";

import pages from "./pages";
import applications from "./applications";
import ui from "./ui";
import menu from "./menu";
import blankPage from "./blank-page";
import maptest from "../../components/trash/addtrash";
import alltrash from "../../components/trash/Alltrash";
import centertrash from "../../components/trash/centerTrash";

import affectedtrash from "../../components/User-CenterComponents/Affected-trash";

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboards`} />
          <Route path={`${match.url}/dashboards`} component={dashboards} />
          <Route path={`${match.url}/applications`} component={applications} />
          <Route path={`${match.url}/pages`} component={pages} />
          <Route path={`${match.url}/ui`} component={ui} />
          <Route path={`${match.url}/menu`} component={menu} />
          <Route path={`${match.url}/addtrash`} component={maptest} />
          <Route path={`${match.url}/alltrash`} component={alltrash} />
          <Route path={`${match.url}/centertrashs`} component={centertrash} />

          <Route path={`${match.url}/affected-trash`} component={affectedtrash} />
          <Route path={`${match.url}/blank-page`} component={blankPage} />
          <Redirect to="/error" />
        </Switch>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
