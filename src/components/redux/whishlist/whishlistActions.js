import {ADD_WHISHLIST, FETCH_WHISHLISTS_REQUEST, FETCH_WHISHLISTS_SUCCESS, FETCH_WHISHLISTS_FAILURE, DELETE_WHISHLIST, UPDATE_WHISHLIST} from './whishlistTypes'
import axios from 'axios'

export const fetchWhishlistsRequest = () => {
    return {
        type : FETCH_WHISHLISTS_REQUEST
    }
}

export const fetchWhishlistsSuccess = whishlists => {
    return {
        type : FETCH_WHISHLISTS_SUCCESS,
        payload : whishlists
    }
}

export const fetchWhishlistsFailure = error => {
    return {
        type : FETCH_WHISHLISTS_FAILURE,
        payload : error
    }
}

export const AddWhishlist = (whishlist) =>{
    return {
        type : ADD_WHISHLIST,
        payload : whishlist
    }
}
export const DeleteWhishlist = (id) =>{
    return {
        type : DELETE_WHISHLIST,
        payload : id
    }
}

export const UpdateWhishlist = (whishlists) =>{
    return {
        type : UPDATE_WHISHLIST,
        payload : whishlists
    }
}

export const fetchWhishlists = () => {
    return function(dispatch){
        dispatch(fetchWhishlistsRequest())
     axios.get('https://greentaa.herokuapp.com/whishlists/')
     .then(response =>{
         const whishlists = response.data
         dispatch(fetchWhishlistsSuccess(whishlists))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchWhishlistsFailure(error.message))
     })
    }
}

export const addWhishlist = (whishlist) =>{
   
    return function (dispatch){
        console.log("Whishlist in redux: ",whishlist)
         axios.post(`https://greentaa.herokuapp.com/whishlists`,whishlist)
         .then((response) => {
            dispatch(AddWhishlist(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}

export const deleteWhishlist = (id) =>{
    return function (dispatch){
         axios.delete(`https://greentaa.herokuapp.com/whishlists/${id}`)
        .then(
            dispatch(DeleteWhishlist(id))
        )
    }
}

export const updateWhishlist= (whishlists) =>{
    return function (dispatch){
         axios.put(`https://greentaa.herokuapp.com/whishlists/${whishlists._id}`,whishlists)
         .then(() => {
            dispatch(UpdateWhishlist(whishlists))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}