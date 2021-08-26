import React, { useEffect} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";
import {fetchTeams} from '../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";
import { ContactSupportOutlined } from "@material-ui/icons";


const BestSellers = ({title="dashboards.best-sellers"}) => {
  const dispatch = useDispatch()
  const teamsData = useSelector((state) => state.teams)
  useEffect(() => {
    dispatch(fetchTeams())
    console.log("Teams : ", teamsData)
  }

, [])
  
  const columns = [
    {
      Header: "#",
      accessor: "index",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
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
      Header: "Sname",
      accessor: "Sname",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },    
    {
      Header: "Region",
      accessor: "Region",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Score",
      accessor: "Score",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ];

  
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.teams-ranking">Teams Ranking</IntlMessages>
        </CardTitle>
        <ReactTable
          defaultPageSize={6}
          data={(teamsData.teams).sort((a, b) => a.Score > b.Score ? -1 : 1)}
          columns={columns}
          minRows={0}
          showPageJump={false}
          showPageSizeOptions={true}
          PaginationComponent={Pagination}
        />
      </CardBody>
    </Card>
  );
};
export default BestSellers;
