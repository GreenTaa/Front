import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, UPDATE_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT} from './productTypes'
import axios from 'axios'

export const fetchProductsRequest = () => {
    return {
        type : FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = products => {
    return {
        type : FETCH_PRODUCTS_SUCCESS,
        payload : products
    }
}

export const fetchProductsFailure = error => {
    return {
        type : FETCH_PRODUCTS_FAILURE,
        payload : error
    }
}

export const AddProduct = (product) =>{
    return {
        type : ADD_PRODUCT,
        payload : product
    }
}
export const DeleteProduct = (id) =>{
    return {
        type : DELETE_PRODUCT,
        payload : id
    }
}

export const UpdateProduct = (products) =>{
    return {
        type : UPDATE_PRODUCT,
        payload : products
    }
}

export const fetchProducts = () => {
    return function(dispatch){
        dispatch(fetchProductsRequest())
     axios.get('http://localhost:3000/products/')
     .then(response =>{
         const products = response.data
         dispatch(fetchProductsSuccess(products))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchProductsFailure(error.message))
     })
    }
}

export const addProduct = (product) =>{
   
    return function (dispatch){
        console.log("Product in redux: ",product)
         axios.post(`http://localhost:3000/products`,product)
         .then((response) => {
            dispatch(AddProduct(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}

export const deleteProduct = (id) =>{
    return function (dispatch){
         axios.delete(`http://localhost:3000/products/${id}`)
        .then(
            dispatch(DeleteProduct(id))
        )
    }
}

export const updateProduct = (products) =>{
    return function (dispatch){
         axios.put(`http://localhost:3000/products/${products._id}`,products)
         .then(() => {
            dispatch(UpdateProduct(products))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}