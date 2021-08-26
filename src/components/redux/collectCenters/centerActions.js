import {FETCH_CENTERS_REQUEST, FETCH_CENTERS_SUCCESS, FETCH_CENTERS_FAILURE, ADD_CENTER, DELETE_CENTER, UPDATE_CENTER} from './centerTypes'
import axios from 'axios'

export const fetchCentersRequest = () => {
    return {
        type : FETCH_CENTERS_REQUEST
    }
}
export const fetchCentersSuccess = centers => {
    return {
        type : FETCH_CENTERS_SUCCESS,
        payload : centers
    }
}

export const fetchCentersFailure = error => {
    return {
        type : FETCH_CENTERS_FAILURE,
        payload : error
    }
}
export const addCenter = (center) =>{
    return {
        type : ADD_CENTER,
        payload : center
    }
}
export const deleteCenter = (id) =>{
    return {
        type : DELETE_CENTER,
        payload : id
    }
}

export const updateCenter = (centers) =>{
    return {
        type : UPDATE_CENTER,
        payload : centers
    }
}

export const AddCenter = (center) =>{
   
    return function (dispatch){
        console.log("Center in redux: ",center)
         axios.post(`http://localhost:3000/users/addCenter/`,center)
         .then((response) => {
            dispatch(addCenter(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}

export const fetchCenters = () => {
    return function(dispatch){
        dispatch(fetchCentersRequest())
     axios.get('http://localhost:3000/collectCenters/')
     .then(response =>{
         const centers = response.data
         dispatch(fetchCentersSuccess(centers))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchCentersFailure(error.message))
     })
    }
}
export const DeleteCenter = (id) =>{
    return function (dispatch){
         axios.delete(`http://localhost:3000/collectCenters/${id}`)
        .then(
            dispatch(deleteCenter(id))
        )
    }
}

export const UpdateCenter = (centers) =>{
    return function (dispatch){
         axios.put(`http://localhost:3000/collectCenters/${centers._id}`,centers)
         .then(() => {
            dispatch(updateCenter(centers))
        }, (error) => {
            console.log({"error updating ": error});
        });
    }
}