import React, { useEffect, Component, Fragment, useState } from "react";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Row, Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {fetchCenters, AddCenter, DeleteCenter, UpdateCenter} from '../../../components/redux/collectCenters/centerActions'
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from "react-table";
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";



export default function EcommerceDashboard()  {
  const dispatch = useDispatch()
const [center, setCenter] = useState({Role : "Center", Active : 1})

var Region = ["Tunis", "Ariana", "Ben Arous", "Mannouba", "Bizerte", "Nabeul", "Béja", "Jendouba", "Zaghouan", "Siliana", "Le Kef", "Sousse", "Monastir", "Mahdia", "Kasserine", "Sidi Bouzid", "Kairouan", "Gafsa", "Sfax", "Gabès", "Médenine", "Tozeur", "Kebili", "Ttataouine"]
var [val, setVal] = useState("Add");
const CustomTbodyComponent = props => (
  
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>

);
const onAdd = (e) => {
    e.preventDefault()
    console.log("submitting : ", center)
    console.log("entred")
    dispatch(AddCenter(center))
    console.log("passed")
}

const onUpdate = (e, center) => {
  console.log("entred to update")
  e.preventDefault()
  console.log("center : ", center)
  console.log("submitting : ", e)
  dispatch(UpdateCenter(center))
  console.log("passed update")
}
 const ReactTableWithScrollableCardCenters = props => {
  const dispatch = useDispatch()
  const centersData = useSelector((state) => state.centers)
  useEffect(() => {
        dispatch(fetchCenters())
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
  {
    Header: "Action",
    accessor: "_id",
    Cell: props => <button className="btn btn-outline-primary"  onClick={() => (setShow(true), setVal("Update") , centersData.centers.filter( e => props.value === e._id)).map((data) => {setCenter(data) })}>Update</button>
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
  var [show, setShow] = useState(false)
    return (
      <Fragment>
        <Button outline color="secondary" className="mb-2"  onClick={() => setShow(!show)} >
                  <IntlMessages id="button.add.center" />
        </Button>
        {show? 
        <form action="#" className="login-form sign-in-form" onSubmit={(e) => { val=="Add" ? onAdd(e) : onUpdate(e, center) }}>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Name</label>
            <input type="text" placeholder="Name"
            value={center.Name}
            onChange={e => {
                const newUserObj = { ...center, Name: e.target.value }
                setCenter(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Phone</label>
            <input type="text" placeholder="Phone"
            value={center.Phone}
            onChange={e => {
                const newUserObj = { ...center, Phone: e.target.value }
                setCenter(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Region</label>
            <select className="custom-select" id="Region-select" 
            value={center.Region}
             onChange={e => {
                const newUserObj = { ...center, Region: e.target.value }
                setCenter(newUserObj);
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
            value={center.Address}
            onChange={e => {
                const newUserObj = { ...center, Address: e.target.value }
                setCenter(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Email Address</label>
            <input type="text" placeholder="saasland@gmail.com"
            onChange={e => {
                const newUserObj = { ...center, Email: e.target.value }
                setCenter(newUserObj);
            }
            }/>
        </div>
        <div className="form-group text_box">
            <label className="f_p text_c f_400">Password</label>
            <input type="password" placeholder="******"
            onChange={e => {
                const newUserObj = { ...center, Password: e.target.value }
                setCenter(newUserObj);
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
          <ReactTableWithScrollableCardCenters />
          </Colxx>
        </Row> 

      </Fragment>
    );
  }

