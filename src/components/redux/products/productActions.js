import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCT, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, UPDATE_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT} from './productTypes'
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

export const FetchProduct = (id) =>{
    return {
        type : FETCH_PRODUCT,
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
     axios.get('https://greentaa.herokuapp.com/products/')
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
         axios.post(`https://greentaa.herokuapp.com/products`,product)
         .then((response) => {
            dispatch(AddProduct(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}

export const deleteProduct = (id) =>{
    return function (dispatch){
         axios.delete(`https://greentaa.herokuapp.com/products/${id}`)
        .then(
            dispatch(DeleteProduct(id))
        )
    }
}

export const fetchProduct = (id) =>{
    return function (dispatch){
         axios.get(`https://greentaa.herokuapp.com/products/${id}`)
        .then(
            dispatch(FetchProduct(id))
        )
    }
}

export const updateProduct = (products) =>{
    return function (dispatch){
         axios.put(`https://greentaa.herokuapp.com/products/${products._id}`,products)
         .then(() => {
            dispatch(UpdateProduct(products))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}