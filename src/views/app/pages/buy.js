import React, {useEffect, Component, Fragment, useState} from "react";
import {
    Row
  } from "reactstrap";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import CustomNavbar from '../../../components/CustomNavbar'
import Card from './Card';
import {fetchProducts, fetchProduct} from '../../../components/redux/products/productActions'
import { fetchWhishlists } from "../../../components/redux/whishlist/whishlistActions";

const ImageListView = ({ }) => {
    const dispatch = useDispatch()
    const whishlistsData = useSelector((state) => state.whishlists)
    const productsData = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchWhishlists());
    }, [ ]);  
        return (
            <>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <>
            <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630597218/teams/ordflpx7kuhlwj5ahkwb.jpg" width="1550px" height="700px" style={{marginBottom: "80px"}}/>
            <div className="container">
            <div className="container" style={{marginBottom: "50px"}}>
                <h2>My Card</h2>
            </div>
            <hr style={{marginTop : "-10px", marginBottom: "50px"}}></hr>
            <Row>
            { whishlistsData.whishlists.filter(whishlist => whishlist.IdUser == localStorage.getItem("id")).filter(whishlist => whishlist.Etat == 1).map(whishlist =>
                 <Card key={whishlist._id} whishlist={whishlist} product={productsData.products.filter(product => product._id == whishlist.Product).map(product => product)[0]}   />
            )} 
            
           </Row>
            </div>
            </>
        </>
        )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);