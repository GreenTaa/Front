import React, {useEffect, useState} from "react";
import './CardStore.css'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../../../components/redux/products/productActions'
import {fetchSupporters} from '../../../components/redux/supporters/suppActions'
import {addWhishlist} from '../../../components/redux/whishlist/whishlistActions'

const CardStore = ({ product}) => {
    const dispatch = useDispatch()
    
    const supportersData = useSelector((state) => state.supporters)
    const [supporter, setSupporter] = useState()
    const [Array, setArray] = useState();

      useEffect(() => {
          dispatch(fetchProducts())
          dispatch(fetchSupporters())
          console.log("pokdjf  " + Array )
    }, [ ]);  
    const addWhishlist = (id) => {
      setArray(Array.concat([id]))
      axios.put( "http://localhost:3000/supporters/"+localStorage.getItem('id'),{Whishlist: Array}  )
      console.log("kamlna " + Array)
    }
    
      /* const onUpdate = (points) => {
        axios.put( "http://localhost:3000/supporters/"+localStorage.getItem('id'),{...supporter, Score: supporter.Score - points}  )
      } */

  return (
      <div sm="6" lg="4" xl="3" className="mx-auto">
        <div class="container mb-5">
  <div class="card">
    <div class="imgBx">
      <img src={product.Picture} alt="picture" />
    </div>
    <div class="contentBx container">
      <row>
      <h2>{product.Name}</h2>
      <h4>{product.Points_Required}</h4>
      </row>
      <br></br>
      {(product.Category === "T-shirt")? 
      <div class="size">
        <h3>Size :</h3>
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
      </div> : ""}
      <br></br> 
      <button className="btn_gett" onClick={() => {
          addWhishlist(product)
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