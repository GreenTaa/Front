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

const CardStore = ({ product}) => {
    var [productLiked, setProductLiked] = useState()
    const getSupporter= async () => {
      try {
          const Supp = await axios.get(
              "http://localhost:3000/supporters/"+localStorage.getItem('id')
          ).then(function(doc){
              if(JSON.stringify(doc.data) === JSON.stringify(supporter))
              {
                  console.log("same")
              }
              else{
                  setSupporter(doc.data);
                  console.log("elseeee");
              }
          });
         
          // set State
      } catch (err) {
          console.error(err.message);
      }
  };
    const dispatch = useDispatch()
      const productsData = useSelector((state) => state.products)
      useEffect(() => {
          dispatch(fetchProducts())

          
        
    }, [ ]);  
    
      const onUpdate = (points) => {
        axios.put( "http://localhost:3000/supporters/"+localStorage.getItem('id'),{...supporter, Score: supporter.Score - points}  )
      }
      const [supporter,setSupporter] = useState();

  return (
      <div sm="6" lg="4" xl="3" className="mx-auto">
        <div class="container mb-5">
  <div class="card">
    <div class="imgBx">
      <img src="https://assets.codepen.io/4164355/shoes.png" />
    </div>
    <div class="contentBx container">
      <h2>{product.Name}</h2>
      <br></br>
      <div class="size">
        <h3>Size :</h3>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <br></br>
      <button className="btn_gett">Buy Now</button>
    </div>
  </div>
</div>
  </div>
 )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CardStore);