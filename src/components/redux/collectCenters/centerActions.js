import {FETCH_CENTERS_REQUEST, FETCH_CENTERS_SUCCESS, FETCH_CENTERS_FAILURE, ADD_CENTER} from './centerTypes'
import axios from 'axios'

export const fetchCentersRequest = () => {
    return {
        type : FETCH_CENTERS_REQUEST
    }
}
export const addCenter = (center) =>{
    return {
        type : ADD_CENTER,
        payload : center
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