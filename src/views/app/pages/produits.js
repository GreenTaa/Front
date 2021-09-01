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
import axios from "axios";

import { AiOutlineHeart } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../../components/common/CustomBootstrap";
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'

const ImageListView = ({ }) => {
    var [productLiked, setProductLiked] = useState()
    const dispatch = useDispatch()
      const productsData = useSelector((state) => state.products)
      useEffect(() => {
            const interval = setInterval(() => {
                dispatch(fetchProducts())
            }, 500);
            return () => clearInterval(interval);
      }
      , [])  
      const onUpdate = (product) => {
        axios.put(`http://localhost:3000/products/${product._id}`,{...product, Likes: product.Likes + 1}  )
      }
      const [supporter,setSupporter] = useState();
    const renderId = () => {
        let id = 0
        if(localStorage.getItem('id') != null)
        {
            id= localStorage.getItem('id');
        }
        return id;
    }

    const getSupporter= async () => {
        try {
            const Supp = await axios.get(
                "http://localhost:3000/supporters/"+renderId()
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
      
  return (
    
    productsData.products.map((product) => {
        return(
        
<Colxx sm="6" lg="4" xl="3" className="mb-3" key={product._id}>
        <ContextMenuTrigger id="menu_id" data={product._id} >
        
          <Card>
            <div className="position-relative">
              <NavLink to={`?p=${product._id}`} className="w-40 w-sm-100">
                <CardImg top alt={product.Name} src={product.Picture} />
              </NavLink>
            </div>
            <CardBody>
              <Row>
                <Colxx xxs="2">
                  <CustomInput
                    className="item-check mb-0"
                    type="checkbox"
                    id={`check_${product._id}`}
                    
                    onChange={() => {}}
                    label=""
                  />
                </Colxx>
                <Colxx xxs="10" className="mb-3">
                  <CardSubtitle>{product.Name}</CardSubtitle>
                  <CardSubtitle>{product.Points_Required   }</CardSubtitle>
                  <CardText className="text-muted text-small mb-0 font-weight-light">
                  <div className="col-md-3 .ml-md-auto">
                  <Row >
                  <button className="btn btn-outline-primary" onClick={() =>  
                   onUpdate(product)} >
                        Like </button>
                  <h4>{product.Likes}</h4>
                  </Row>
                  <Row>
                  <button className="btn btn-outline-primary">Buy</button>
                  </Row>
                  </div>
                  </CardText>
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </ContextMenuTrigger>
      </Colxx> 
     
        )
        
    })
   
  
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
