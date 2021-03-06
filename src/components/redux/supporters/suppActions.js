import {FETCH_SUPPORTERS_REQUEST, FETCH_SUPPORTERS_SUCCESS,FETCH_SUPPORTER, FETCH_SUPPORTERS_FAILURE, ADD_SUPPORTER, UPDATE_SUPPORTER, DELETE_SUPPORTER} from './suppTypes'
import axios from 'axios'
import { fetchTeamsSuccess } from '../teams/teamActions'

export const fetchSupportersRequest = () => {
    return {
        type : FETCH_SUPPORTERS_REQUEST
    }
}

export const fetchSupportersSuccess = supporters => {
    return {
        type : FETCH_SUPPORTERS_SUCCESS,
        payload : supporters
    }
}

export const fetchSupportersFailure = error => {
    return {
        type : FETCH_SUPPORTERS_FAILURE,
        payload : error
    }
}

export const fetchSupporter = (id) =>{
    return {
        type : FETCH_SUPPORTER,
        payload : id
    }
}

export const addSupporter = (supp) =>{
    return {
        type : ADD_SUPPORTER,
        payload : supp
    }
}

export const deleteSupporter = (id) =>{
    return {
        type : DELETE_SUPPORTER,
        payload : id
    }
}

export const updateSupporter = (supporters) =>{
    return {
        type : UPDATE_SUPPORTER,
        payload : supporters
    }
}

export const AddSupporter = (supp) =>{
   
    return function (dispatch){
        console.log("supporter in redux: ",supp)
         axios.post(`https://greentaa.herokuapp.com/users/addsupp/`,supp)
         .then((response) => {
            dispatch(addSupporter(response.data))
            /* fetchSupporters() */
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}

export const DeleteSupporter = (id) =>{
    return function (dispatch){
         axios.delete(`https://greentaa.herokuapp.com/supporters/${id}`)
        .then(
            dispatch(deleteSupporter(id))
        )
    }
}

export const UpdateSupporter = (supporters) =>{
    return function (dispatch){
         axios.put(`https://greentaa.herokuapp.com/supporters/${supporters._id}`,supporters)
         .then(() => {
            dispatch(updateSupporter(supporters))
            fetchSupporters()
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}

export const fetchSupporters = () => {
    return function(dispatch){
        dispatch(fetchSupportersRequest())
     axios.get('https://greentaa.herokuapp.com/supporters/')
     .then(response =>{
         const supporters = response.data
         dispatch(fetchSupportersSuccess(supporters))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchSupportersFailure(error.message))
     })
    }
}

export const FetchSupporter = (id) =>{
    return function (dispatch){
         axios.get(`https://greentaa.herokuapp.com/supporters/${id}`)
        .then(
            dispatch(fetchSupporter(id))
        )
    }
}