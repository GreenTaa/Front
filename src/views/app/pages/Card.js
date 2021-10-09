import React, {useEffect, useState} from "react";
import './Card.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts, addProduct} from '../../../components/redux/products/productActions'
import {fetchSupporters} from '../../../components/redux/supporters/suppActions'
import { deleteWhishlist, updateWhishlist } from "../../../components/redux/whishlist/whishlistActions";
import { FaTimes } from 'react-icons/fa';
import whishlist from "./whishlist";

const CardWhishlist = ({whishlist, product}) => {
    const dispatch = useDispatch()
      useEffect(() => {
          dispatch(fetchProducts())
          dispatch(fetchSupporters())
    }, [ ]);  

  return (
      <>
  <div class="big">
	 <article class="recipe">
		<div class="pizza-box">
			<img src={product.Picture} width="50" height="100" alt="" />
		</div>	
		<div class="recipe-content">
			<h1 class="recipe-title"><a href="#">{product.Name}</a></h1>
			<h3 class="recipe-desc">{product.Points_Required}</h3>
            <h3 class="recipe-desc">Your coupon : #{whishlist.Coupon}</h3>
		</div>
	</article>
</div>

</>
 )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(CardWhishlist);