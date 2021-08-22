import {FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE, ADD_TEAM} from './teamTypes'
import axios from 'axios'

export const fetchTeamsRequest = () => {
    return {
        type : FETCH_TEAMS_REQUEST
    }
}
export const addTeam = (team) =>{
    return {
        type : ADD_TEAM,
        payload : team
    }
}

export const AddTeam = (team) =>{
   
    return function (dispatch){
        console.log("Team in redux: ",team)
         axios.post(`http://localhost:3000/users/addteam/`,team)
         .then((response) => {
            dispatch(addTeam(response.data))
        }).catch((error)=>console.log("errorAddinng  : ", error));
    }
}