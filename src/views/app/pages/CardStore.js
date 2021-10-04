import React, {useEffect, useState} from "react";
import './CardStore.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts, addProduct} from '../../../components/redux/products/productActions'
import {fetchSupporters} from '../../../components/redux/supporters/suppActions'
import { addWhishlist } from "../../../components/redux/whishlist/whishlistActions";
import { object } from "yup";
import { Row } from "reactstrap";

const CardStore = ({ product}) => {
    const dispatch = useDispatch()
    
    const supportersData = useSelector((state) => state.supporters)
    const [supporter, setSupporter] = useState()
    const [Array, setArray] = useState();
    const [whishlistItem, setWhishlistItem] = useState({IdUser: localStorage.getItem('id'), Etat: 0})

      useEffect(() => {
          dispatch(fetchProducts())
          dispatch(fetchSupporters())
          console.log("pokdjf  " + Array )
    }, [ ]);  
    const add = (whishlistItem) => {
      dispatch(addWhishlist(whishlistItem))
      console.log("doneeeee" + whishlistItem)
    }

  return (
      <div sm="6" lg="4" xl="3" className="mx-auto">
        <div className="container mb-5">
  <div className="card">
    <div className="imgBx">
      <img src={product.Picture} alt="picture" />
    </div>
    <div className="contentBx container">
      <row>
      <h2>{product.Name}</h2>
      <h4>{product.Points_Required}</h4>
      </row>
      <br></br>
      {(product.Category === "T-shirt")? 
      <div className="size">
        <h3>Size :</h3>
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
      </div> : ""}
      <br></br> 
      <button className="btn_gett" onClick={() => {
          const newObj = { ...whishlistItem, Product: product}
          setWhishlistItem(newObj)
          console.log("lmkkjhugfd" + newObj)
          add(whishlistItem)
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