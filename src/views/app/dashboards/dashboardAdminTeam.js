import React, { useEffect, Component, Fragment, useState } from "react";
import { Colxx } from "../../../components/common/CustomBootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";
import { Row, Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {fetchTeams, AddTeam, DeleteTeam, UpdateTeam} from '../../../components/redux/teams/teamActions'
import { useDispatch, useSelector } from 'react-redux';

export default function EcommerceDashboard()  {
  const CustomTbodyComponent = props => (
  
    <div {...props} className={classnames("rt-tbody", props.className || [])}>
      <PerfectScrollbar option={{ suppressScrollX: true }}>
        {props.children}
      </PerfectScrollbar>
    </div>
  
  );
  const dispatch = useDispatch()
  const [team, setTeam] = useState({Role : "Team", Active : 1})
  const [fileInputState, setFileInputState] = useState('')
  const [previewSource, setPreviewSource] = useState('')
  
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
      team.Logo = base64EncodedImage
  }
  const onUpdate = (e, team) => {
    console.log("entred to update")
    e.preventDefault()
    console.log("team : ", team)
    console.log("submitting : ", e)
    if (previewSource) uploadImage(previewSource)
    dispatch(UpdateTeam(team))
    console.log("passed update")
  }
  

  var Region = ["Tunis", "Ariana", "Ben Arous", "Mannouba", "Bizerte", "Nabeul", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le Kef", "Sousse", "Monastir", "Mahdia", "Kasserine", "Sidi Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabès", "Médenine", "Tozeur", "Kebili", "Ttataouine"]
  var [val, setVal] = useState("Add");
  const onAdd = (e) => {
      e.preventDefault()
      console.log("submitting : ", team)
      if (!previewSource) return
      uploadImage(previewSource)
      console.log("entred")
      dispatch(AddTeam(team))
      console.log("passed")
  }
  const ReactTableWithScrollableCard = (show) => {
  const dispatch = useDispatch()
  const teamsData = useSelector((state) => state.teams)
  useEffect(() => {
      dispatch(fetchTeams())
      console.log("Teams : ", teamsData)
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
    {
      Header: "Action",
      accessor: "_id",
      Cell: props => <button className="btn btn-outline-danger" onClick={() => (setShow(true), setVal("Update") , teamsData.teams.filter( e => props.value === e._id)).map((data) => {setTeam(data) })}>Update</button>
    }
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
  );}
  var [show, setShow] = useState(false)
  
  return (
    <Fragment>
      <Button outline color="secondary" className="mb-2"  onClick={() => setShow(!show)} >
                <IntlMessages id="button.add" />
      </Button>
      {show? 
        <form action="#" className="login-form sign-in-form" onSubmit={(e) => { val=="Add" ? onAdd(e) : onUpdate(e, team) }}>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Name</label>
            <input type="text" placeholder="Name"
            value={team.Name}
            onChange={e => {
                const newUserObj = { ...team, Name: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Acronym</label>
            <input type="text" placeholder="Sname"
            value={team.Sname}
            onChange={e => {
                const newUserObj = { ...team, Sname: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Phone</label>
            <input type="text" placeholder="Phone"
            value={team.Phone}
            onChange={e => {
                const newUserObj = { ...team, Phone: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Region</label>
            <select className="custom-select" id="Region-select" 
            value={team.Region}
             onChange={e => {
                const newUserObj = { ...team, Region: e.target.value }
                setTeam(newUserObj);
            }}>
            <option value="Region">--Please select your Region --</option>
            {Region.map((option, index) => { 
                return  (<option  value={option} key={index}>{option} </option> )   
            })}
            </select>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Address</label>
            <input type="text" placeholder="Address"
            value={team.Address}
            onChange={e => {
                const newUserObj = { ...team, Address: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Logo</label>
            <div>
            <input type="file"
                className="form-input"
                name="Logo"
                value={fileInputState}
                onChange={onFileChange}
            /></div>
        </div>
        <div>
            {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Email Address</label>
            <input type="text" placeholder="saasland@gmail.com"
            onChange={e => {
                const newUserObj = { ...team, Email: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Password</label>
            <input type="password" placeholder="******"
            onChange={e => {
                const newUserObj = { ...team, Password: e.target.value }
                setTeam(newUserObj);
            }
            }/>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn_three">{val}</button>
        </div>
    </form>
  : ""}
  <Row>
  <Colxx xl="12" lg="12" className="mb-4">
  <ReactTableWithScrollableCard/>
  </Colxx>
</Row>

</Fragment>
);
}