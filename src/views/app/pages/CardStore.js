import React, {useEffect, Component, Fragment, useState} from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  CustomInput,
  Badge
} from "reactstrap";
import './CardStore.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../../components/common/CustomBootstrap";
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'
import { FetchSupporter } from "../../../components/redux/supporters/suppActions";

const CardStore = ({ product}) => {
    const dispatch = useDispatch()
      const productsData = useSelector((state) => state.products)
      useEffect(() => {
          dispatch(fetchProducts())
          console.log("Type " + typeof(whishlist))
    }, [ ]);  
    const [whishlist, setwhishlist] = useState(localStorage.Whishlist);

    const addWhishlist = (supporter) => {
      axios.put( "http://localhost:3000/supporters/"+localStorage.getItem('id'), supporter  ) 
      console.log("added")
    }
    
      const onUpdate = (points) => {
        axios.put( "http://localhost:3000/supporters/"+localStorage.getItem('id'),{...supporter, Score: supporter.Score - points}  )
      }
      const [supporter,setSupporter] = useState(axios.get( "http://localhost:3000/supporters/"+localStorage.getItem('id')));

  return (
      <div sm="6" lg="4" xl="3" className="mx-auto">
        <div class="container mb-5">
  <div class="card">
    <div class="imgBx">
      <img src={product.Picture} />
    </div>
    <div class="contentBx container">
      <h2>{product.Name}</h2>
      <br></br>
      {(product.Category == "T-shirt")? 
      <div class="size">
        <h3>Size :</h3>
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
      </div> : ""}
      <br></br>
      <h3>{product.Points_Required}</h3>
      <br></br> 
      <button className="btn_gett" onClick={() => {
          console.log("zid tfouh")
          }}
        >Add to whishlist</button>
    </div>
  </div>
</div>
  </div>
 )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CardStore);