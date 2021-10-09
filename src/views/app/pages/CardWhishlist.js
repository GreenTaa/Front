import React, {useEffect, useState} from "react";
import './CardWhishlist.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts, addProduct} from '../../../components/redux/products/productActions'
import {fetchSupporters,  UpdateSupporter} from '../../../components/redux/supporters/suppActions'
import { deleteWhishlist, updateWhishlist } from "../../../components/redux/whishlist/whishlistActions";
import { FaTimes } from 'react-icons/fa';
import whishlist from "./whishlist";

const CardWhishlist = ({whishlist, product}) => {
    const dispatch = useDispatch()
	const connectedUserData = useSelector((state) => state.connectUser)
      useEffect(() => {
          dispatch(fetchProducts())
          dispatch(fetchSupporters())
		  console.log("Connected user " + connectedUserData.user)
    }, [ ]);  

  return (
      <>
  <div class="big">
	 <article class="recipe">
		<div class="pizza-box">
			<img src={product.Picture} width="50" height="100" alt="" />
		</div>	
		<div class="recipe-content">
		<div className="clo">
		<h3 ><FaTimes style={{  cursor: 'pointer' }} onClick={() => dispatch(deleteWhishlist(whishlist._id))} width="150" height="150"/></h3>
		</div>
			<h1 class="recipe-title"><a href="#">{product.Name}</a></h1>
			<h3 class="recipe-desc">{product.Points_Required}</h3>
			<button class="recipe-save" onClick={() => {
          		 dispatch(updateWhishlist({...whishlist, Etat: 1, Coupon: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9)}))
				 dispatch(UpdateSupporter({...connectedUserData, Score : connectedUserData.Score - product.Points_Required}))
      		}} 
			  type="button">
				Get the product
			</button>
		</div>
	</article>
</div>

</>
 )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CardWhishlist);