import React, { useEffect} from "react";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, CardBody, CardTitle, Badge } from "reactstrap";


import IntlMessages from "../../helpers/IntlMessages";
import data from "../../data/products";
import {fetchTeams} from '../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';

export default function RecentOrders() {
    const dispatch = useDispatch()
    const teamsData = useSelector((state) => state.teams)
    useEffect(() => {
      
      console.log("Teams : ", teamsData)}
  
  , [])
  useEffect(() => {
    const interval = setInterval(() => {
        dispatch(fetchTeams())
    }, 500);
    return () => clearInterval(interval);
}
, [])  
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <button className="btn btn-header-light icon-button">
          <i className="simple-icon-refresh" />
        </button>
      </div>
      <CardBody>
        <CardTitle>
        <h2>Team's Ranking</h2>
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            option={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {teamsData.teams.map((team, index) => {
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <NavLink
                    to="/app/pages/details"
                    className="d-block position-relative"
                  >
                    <img
                      src={team.Logo}
                      alt={team.Sname}
                      height="50px"
                      width="50px"
                      className="list-thumbnail border-0"
                    />
                  </NavLink>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    <NavLink to="/app/pages/details">
                      <p className="list-item-heading">{team.Name}</p>
                      <div className="pr-4">
                        <p className="text-muted mb-1 text-small">
                          {team.Sname}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {team.Score}
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
}
