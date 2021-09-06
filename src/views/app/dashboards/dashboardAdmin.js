import React, { useEffect, Component, Fragment, useState } from "react";
import { injectIntl } from "react-intl";
import IconCards from "../../../containers/ui/IconCards";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ThumbListView from "../../../views/app/pages/thumb";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Ranking2 from "../../../containers/dashboards/RankingBoard2";
import Tickets from "../../../containers/dashboards/Tickets";
import Calendar from "../../../containers/dashboards/Calendar";
import Ranking from "../../../containers/dashboards/RankingBoard1";
import {AddSupporter, fetchSupporters, DeleteSupporter, UpdateSupporter} from '../../../components/redux/supporters/suppActions'
import {fetchTeams, DeleteTeam, UpdateTeam} from '../../../components/redux/teams/teamActions'
import {fetchCenters, DeleteCenter, UpdateCenter} from '../../../components/redux/collectCenters/centerActions'
/* import {
  ReactTableWithScrollableCard,
  ReactTableWithScrollableCardTeams,
  ReactTableWithScrollableCardCenters
} from "../../../containers/ui/ReactTableCardsAdmin"; */
import {Link} from 'react-router-dom';
import IntlMessages from "../../../helpers/IntlMessages";
import Cakes from "../../../containers/dashboards/Cakes";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";
import { useDispatch, useSelector } from 'react-redux';
import SignUp from "../../../Pages/SignUp";
import SignUpForm from "../../../components/SignUpForm";
import FormSupporter from './formSupporter'
import { Card, CardBody, CardTitle, Button, Row, Input, FormGroup, Col } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";
import DatePicker from 'react-datepicker'
import moment from 'moment';


export default function EcommerceDashboard()  {
  const CustomTbodyComponent = props => (

    <div {...props} className={classnames("rt-tbody", props.className || [])}>
      <PerfectScrollbar option={{ suppressScrollX: true }}>
        {props.children}
      </PerfectScrollbar>
    </div>

  );
  const onFileChange = event => {
    // Update the state 
    const file = event.target.files[0];
    console.log(event.target.files[0])
    previewFile(file)
};
const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        setPreviewSource(reader.result)
    }
}

const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage)
    user.Avatar = base64EncodedImage
}
const teamsData = useSelector((state) => state.teams)
useEffect(() => {
      dispatch(fetchSupporters())
}
, [])  
useEffect(() => {
  dispatch(fetchTeams())
}
, [])  
var teams = teamsData.teams.map(team => team.Sname)
const [fileInputState, setFileInputState] = useState('')
const [previewSource, setPreviewSource] = useState('')
const onAdd = (e) => {
    e.preventDefault()
    console.log("submitting : ", user)
    if (!previewSource) return
    uploadImage(previewSource)
    console.log("entred")
    dispatch(AddSupporter(user))
    console.log("passed")
}
const onUpdate = (e, user) => {
  console.log("entred to update")
  e.preventDefault()
  console.log("user : ", user)
  console.log("submitting : ", e)
  if (previewSource) uploadImage(previewSource)
  dispatch(UpdateSupporter(user))
  console.log("passed to update")
}
const dispatch = useDispatch()

  var [val, setVal] = useState("Add");
  const [user, setUser] = useState({Firstname: "", Lastname: "", Role : "Supporter", Active : 1})
const ReactTableWithScrollableCard = (show) => {
  const supportersData = useSelector((state) => state.supporters)
  const dispatch = useDispatch()

  const dataTableColumns = [ 
      {
        Header: "Image",
        accessor: "Avatar",
        Cell: props => <img
        src={props.value}
        width="50px"
        height="50px"
        className="avatar-rounded-circle border-0 mr-2"
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
          Cell: props => <button className="btn btn-outline-primary" onClick={() => (setShow(true), setVal("Update") , supportersData.supporters.filter( e => props.value === e._id)).map((data) => {setUser(data) })} >Update</button>
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

  var [show, setShow] = useState(false)

    return (
      <Fragment>
        <Button outline color="secondary" className="mb-2"  onClick={() => setShow(!show)} >
                  <IntlMessages id="button.add" />
        </Button>
        {show? 
        <div>
        <form action="#" className="login-form sign-in-form" onSubmit={(e) => { val=="Add" ? onAdd(e) : onUpdate(e, user) }}>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">First Name</label>
             <input type="text" placeholder="First Name"
            value={user.Firstname}
            onChange={e => {
                const newUserObj = { ...user, Firstname: e.target.value }
                setUser(newUserObj);
            }
            }/> 
        </div>
        <div className="form-group text_box">
             <label className="f_p text_c f_400">Last Name</label>
            <input type="text" placeholder="Last Name"
            value={user.Lastname}
            onChange={e => {
                const newUserObj = { ...user, Lastname: e.target.value }
                setUser(newUserObj);
            }
            }/> 
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Phone Number</label>
            <input type="text" placeholder="Phone Number"
            value={user.Phone}
            onChange={e => {
                const newUserObj = { ...user, Phone: e.target.value }
                setUser(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Team</label>
            <select className="custom-select" id="team-select" 
            value={user.Team}
             onChange={e => {
                const newUserObj = { ...user, Team: e.target.value }
                setUser(newUserObj);
            }}>
            <option value="team">--Please choose your team --</option>
            {teams.map((option, index) => { 
                return  (<option  value={option} key={index}>{option} </option> )   
            })}
            </select>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Date of birth</label>
            <DatePicker 
            selected = {user.Date_birth? new Date(user.Date_birth) : user.Date_birth}
            onChange = { date => {
                setUser({
                    ...user,
                    Date_birth : moment(date).format("YYYY-MM-DD")
                })
            }}  
            dateFormat= 'dd/MM/yyyy'
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            maxDate={new Date()}/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Address</label>
            <input type="text" placeholder="Address"
            value={user.Address}
            onChange={e => {
                const newUserObj = { ...user, Address: e.target.value }
                setUser(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Image</label>
            <div>
            <label className="btn_get"> Select Avatar
            <input type="file"
                className="form-input"
                name="Avatar"
                value={fileInputState}
                onChange={onFileChange}
            /></label></div>
        </div>
        <div>
            {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Email Address</label>
            <input type="text" placeholder="saasland@gmail.com"
            value={user.Email}
            onChange={e => {
                const newUserObj = { ...user, Email: e.target.value }
                setUser(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Password</label>
            <input type="password" placeholder="******"
            value={user.Password}
            onChange={e => {
                const newUserObj = { ...user, Password: e.target.value }
                setUser(newUserObj);
            }
            }/>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn_three">{val}</button>
        </div>
    </form>
</div>
        : ""}
        <Row>
          <Colxx xl="12" lg="12" className="mb-4">
          <ReactTableWithScrollableCard/>
          </Colxx>
        </Row>

      </Fragment>
    );
  }