import {FETCH_SUPPORTERS_REQUEST, FETCH_SUPPORTERS_SUCCESS, FETCH_SUPPORTERS_FAILURE, ADD_SUPPORTER} from './suppTypes'
import axios from 'axios'

export const fetchSupportersRequest = () => {
    return {
        type : FETCH_SUPPORTERS_REQUEST
    }
}
export const addSupporter = (supp) =>{
    return {
        type : ADD_SUPPORTER,
        payload : supp
    }
}

export const AddSupporter = (supp) =>{
   
    return function (dispatch){
        console.log("supporter in redux: ",supp)
         axios.post(`http://localhost:3000/users/addsupp/`,supp)
         .then((response) => {
            dispatch(addSupporter(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}