import React, { useEffect, useState} from "react";
import { Card, CardBody, CardTitle, Button, Row } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";
import {fetchSupporters, DeleteSupporter, UpdateSupporter} from '../../components/redux/supporters/suppActions'
import {fetchTeams, DeleteTeam, UpdateTeam} from '../../components/redux/teams/teamActions'
import {fetchCenters, DeleteCenter, UpdateCenter} from '../../components/redux/collectCenters/centerActions'
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from "../../helpers/IntlMessages";

const CustomTbodyComponent = props => (
  
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>

);

export const ReactTableWithScrollableCard = (show) => {

const supportersData = useSelector((state) => state.supporters)
const dispatch = useDispatch()
useEffect(() => {
  const interval = setInterval(() => {
      dispatch(fetchSupporters())
  }, 5000);
  return () => clearInterval(interval);
}
, [])  
const dataTableColumns = [ 
    {
      Header: "Image",
      accessor: "Avatar",
      Cell: props => <img
      src={props.value}
      width="50px"
      height="50px"
      className="list-thumbnail border-0"
    />
    },
    {
      Header: "First Name",
      accessor: "Lastname",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Last Name",
      accessor: "Firstname",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Date Birth",
      accessor: "Date_birth",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },    
    {
      Header: "Phone",
      accessor: "Phone",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Score",
      accessor: "Score",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Team",
      accessor: "Team",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Action",
      accessor: "_id",
      Cell: props => <button className="btn btn-outline-danger" onClick={() => dispatch(DeleteSupporter(props.value))} >Delete</button>
    },
       {
        Header: "Action",
        accessor: "_id",
        Cell: props => <button className="btn btn-outline-warning" /* onClick={() => ()} */>Update</button>
      }, 
];


  return (
    <Card className="mb-4">
      <CardBody>
        <Row>
        <CardTitle>
          <IntlMessages id="table.react-supporters" />
        </CardTitle>
        </Row>
        <ReactTable
          data={supportersData.supporters}
          TbodyComponent={CustomTbodyComponent}
          columns={dataTableColumns}
          defaultPageSize={10}
          showPageJump={false}
          showPageSizeOptions={false}
          showPagination={true}
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};
 export const ReactTableWithScrollableCardTeams = props => {
    const dispatch = useDispatch()
const teamsData = useSelector((state) => state.teams)
useEffect(() => {
  const interval = setInterval(() => {
      dispatch(fetchTeams())
  }, 5000);
  return () => clearInterval(interval);
}
, [])   
const Columns = [
    {
      Header: "Logo",
      accessor: "Logo",
      Cell: props => <img
      src={props.value}
      width="50px"
      height="50px"
      className="list-thumbnail border-0"
    />
    },
    {
      Header: "Name",
      accessor: "Name",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Acronym",
      accessor: "Sname",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Score",
      accessor: "Score",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Action",
      accessor: "_id",
      Cell: props => <button className="btn btn-outline-danger" onClick={() => dispatch(DeleteTeam(props.value))} >Delete</button>
    },
];
  return (
    <Card className="mb-4">
      <CardBody>
        <Row>
        <CardTitle>
          <IntlMessages id="table.react-teams" />
        </CardTitle>
        </Row>
        <ReactTable
          data={teamsData.teams}
          TbodyComponent={CustomTbodyComponent}
          columns={Columns}
          defaultPageSize={20}
          showPageJump={false}
          showPageSizeOptions={false}
          showPagination={true}
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};

export const ReactTableWithScrollableCardCenters = props => {
    const dispatch = useDispatch()
    const centersData = useSelector((state) => state.centers)
    useEffect(() => {
      const interval = setInterval(() => {
          dispatch(fetchCenters())
      }, 5000);
      return () => clearInterval(interval);
    }
    , [])  
const ColumnsC = [
    {
      Header: "Name",
      accessor: "Name",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Region",
      accessor: "Region",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Phone",
      accessor: "Phone",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Action",
      accessor: "_id",
      Cell: props => <button className="btn btn-outline-danger" onClick={() => dispatch(DeleteCenter(props.value))} >Delete</button>
    },
]; 
  return (
    <Card className="mb-4">
      <CardBody>
        <Row>
        <CardTitle>
          <IntlMessages id="table.react-centers" />
        </CardTitle>
        </Row>
        <ReactTable
          data={centersData.centers}
          TbodyComponent={CustomTbodyComponent}
          columns={ColumnsC}
          defaultPageSize={20}
          showPageJump={false}
          showPageSizeOptions={false}
          showPagination={true}
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
}; 

