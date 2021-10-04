import React, { useEffect, Component, Fragment, useState } from "react";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Row, Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'



export default function EcommerceDashboard()  {
    
    var [show, setShow] = useState(false)
    const CustomTbodyComponent = props => (
  
        <div {...props} className={classnames("rt-tbody", props.className || [])}>
          <PerfectScrollbar option={{ suppressScrollX: true }}>
            {props.children}
          </PerfectScrollbar>
        </div>
      
      );
      const dispatch = useDispatch()
      const [product, setProduct] = useState({Team : "CA", Likes: 0})
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
          product.Picture = base64EncodedImage
      }
      const onUpdate = (e, product) => {
        console.log("entred to update")
        e.preventDefault()
        console.log("product : ", product)
        console.log("submitting : ", e)
        if (previewSource) uploadImage(previewSource)
        dispatch(updateProduct(product))
        console.log("passed update")
      }
      
        var [val, setVal] = useState("Add");
      const onAdd = (e) => {
          e.preventDefault()
          console.log("submitting : ", product)
          if (!previewSource) return
          uploadImage(previewSource)
          console.log("entred")
          dispatch(addProduct(product))
          console.log("passed")
      }
      const ReactTableWithScrollableCard = (show) => {
      const dispatch = useDispatch()
      const productsData = useSelector((state) => state.products)
  useEffect(() => {
        dispatch(fetchProducts())
  }
  , [])   
      const Columns = [
        {
          Header: "Photo",
          accessor: "Picture",
          Cell: props => <img
          src={props.value}
          width="50px"
          height="50px"
          className="avatar-rounded-circle border-0 mr-2"
        />
        },
        {
          Header: "Nom",
          accessor: "Name",
          Cell: props => <p className="list-item-heading">{props.value}</p>
        },
        {
          Header: "Points requis",
          accessor: "Points_Required",
          Cell: props => <p className="list-item-heading">{props.value}</p>
        },
        {
          Header: "Action",
          accessor: "_id",
          Cell: props => <button className="btn btn-outline-danger" onClick={() => dispatch(deleteProduct(props.value))} >Supprimer</button>
        },
        {
          Header: "Action",
          accessor: "_id",
          Cell: props => <button className="btn btn-outline-warning" onClick={() => (setShow(true), setVal("Update") , productsData.products.filter( e => props.value === e._id)).map((data) => {setProduct(data) })}>Modifier</button>
        }
    ];
      return (
        <Card className="mb-4">
          <CardBody>
            <Row>
            <CardTitle>
              <IntlMessages id="table.react-products" />
            </CardTitle>
            </Row>
            <ReactTable
              data={productsData.products}
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
                    <IntlMessages id="button.add.product" />
          </Button>
          {show? 
            <form action="#" className="login-form sign-in-form" onSubmit={(e) => { val=="Add" ? onAdd(e) : onUpdate(e, product) }}>
            <div className="form-group text_box">
                <label className="f_p text_c f_400">Name</label>
                <input type="text" placeholder="Name"
                value={product.Name}
                onChange={e => {
                    const newUserObj = { ...product, Name: e.target.value }
                    setProduct(newUserObj);
                }
                }/>
            </div>

            <div className="form-group text_box">
                <label className="f_p text_c f_400">Picture</label>
                <div>
                <label className="btn_get"> Select Picture  
                <input type="file"
                    className="form-input"
                    name="Picture"
                    value={fileInputState}
                    onChange={onFileChange}
                /> </label></div>
            </div>
            <div>
                {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px'}}/>)}
            </div>
            <div className="form-group text_box">
                <label className="f_p text_c f_400">Points required</label>
                <input type="text" placeholder="Points required"
                value={product.Points_Required}
                onChange={e => {
                    const newUserObj = { ...product, Points_Required: e.target.value }
                    setProduct(newUserObj);
                }
                }/>
            </div>
            <div className="form-group text_box">
                <label className="f_p text_c f_400">Category</label>
                <input type="text" placeholder="Category"
                value={product.Category}
                onChange={e => {
                    const newUserObj = { ...product, Category: e.target.value }
                    setProduct(newUserObj);
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

