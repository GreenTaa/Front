import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import defaultDash from './default';
import contentDash from './content';
import analyticsDash from './analytics';
import ecommerceDash from './ecommerce';
import dashboardAdmin from "./dashboardAdmin";
import dashboardAdminTeam from "./dashboardAdminTeam"
import dashboardAdminCenter from "./dashboardAdminCenter"
import dashboardAdminRanking from "./dashboardAdminRanking"
import dashboardTeam from "./dashboardteam"
import dashboardCenter from "./dashboardcenter"

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
            <Route path={`${match.url}/default`} component={defaultDash} />
            <Route path={`${match.url}/content`} component={contentDash} />
            <Route path={`${match.url}/ecommerce`} component={ecommerceDash} />
            <Route path={`${match.url}/analytics`} component={analyticsDash} />
            <Route path={`${match.url}/dashboard-admin`} component={dashboardAdmin} />
            <Route path={`${match.url}/manageTeams`} component={dashboardAdminTeam} />
            <Route path={`${match.url}/manageCenters`} component={dashboardAdminCenter} />
            <Route path={`${match.url}/ranking`} component={dashboardAdminRanking} />
            <Route path={`${match.url}/dashboard-team`} component={dashboardTeam} />
            <Route path={`${match.url}/dashboard-center`} component={dashboardCenter} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Dashboards;