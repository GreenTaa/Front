import React, {useEffect, useState} from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText

} from "reactstrap";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { ContextMenuTrigger } from "react-contextmenu";
import { Colxx } from "../../../components/common/CustomBootstrap";
import {fetchProducts, addProduct, deleteProduct, updateProduct} from '../../../components/redux/products/productActions'

const ImageListView = ({ product}) => {
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

      <Colxx sm="6" lg="4" xl="3" className="mx-auto" key={product._id}>
        <ContextMenuTrigger id="menu_id" data={product._id} >
          
          <div className="mb-5">
           <Card>  
          
          <div className="position-relative">
            <NavLink to={`?p=${product._id}`} className="w-40 w-sm-100">
              <CardImg top alt={product.Name} src={product.Picture} width="270" height="270"/>
            </NavLink>
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="10" className="mb-3">
                <CardSubtitle>{product.Name}</CardSubtitle>
                <CardSubtitle>{product.Points_Required   }</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                <div className="col-md-3 .ml-md-auto">
                <Row>
                <button className="btn btn-outline-primary"  onClick={() => onUpdate(product.Points_Required)} >Buy</button>
                </Row>
                </div>
                </CardText>
              </Colxx>
            </Row>
          </CardBody>
          
        </Card>
        </div>
      
        </ContextMenuTrigger>
      </Colxx> 
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ImageListView);
