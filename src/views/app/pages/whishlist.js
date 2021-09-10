import React, {useEffect, Component, Fragment, useState} from "react";
import {
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    Row
  } from "reactstrap";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import CustomNavbar from '../../../components/CustomNavbar'
import CardStore from './CardStore';
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'
import { fetchSupporters, FetchSupporter } from "../../../components/redux/supporters/suppActions";
import Pagination   from './pagination';

const ImageListView = ({ }) => {
    var [productLiked, setProductLiked] = useState()
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.products)
    const [supporter,setSupporter] = useState();
    const [connected, setConnected] = useState(false);
    const team = localStorage.getItem("Team");
    const whishlist = [localStorage.Whishlist];
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productsData.products.filter(product => product.Team == team).slice(indexOfFirstPost, indexOfLastPost);
    const currentPostsFiltred = productsData.products.filter(product => product.Team == team).filter(product => product).slice(indexOfFirstPost, indexOfLastPost);            
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [ ]);  
    var category = productsData.products.map(product => product.Category)
    var category1 = category.filter((value, index) => category.indexOf(value) === index) 
    var [option, setOption] = useState();
    var [selected, setSelected] = useState(false);
        return (
            <>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus"/>
            <>
            <img src="http://res.cloudinary.com/dkqbdhbrp/image/upload/v1630597218/teams/ordflpx7kuhlwj5ahkwb.jpg" width="1550px" height="700px" style={{marginBottom: "80px"}}/>
            <div className="container">
            <div className="container" style={{marginBottom: "50px"}}>
                <h2>{team} Store</h2>
                <div className="dropdown">
                <button className="btn_get btn_hover" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by Category
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={() => (setSelected(false))}>All Categories</a> 
                {category1.map((option, index) => { 
                    return  ( <a className="dropdown-item" key={index} value={option} onClick={() =>( /* showProductsByCategory({option}),  */ console.log("Posts =  " + team), setSelected(true), setOption(option) )}>{option}</a> )   
                })}
                </div>
            </div>
            </div>
            <hr style={{marginTop : "-10px", marginBottom: "50px"}}></hr>
             
            <>
           <center>
            <Row>
            { whishlist.map(product =>
                <CardStore key={product._id} product={product}   />  
            )}
           </Row>
           <div className="container text-center">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={whishlist.length}
                paginate={paginate}
                /></div>
          
           </center>
            </>
            
            </div>
        </>
        </>
        )
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);