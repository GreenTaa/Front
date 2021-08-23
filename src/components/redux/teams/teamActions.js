import {FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE, ADD_TEAM} from './teamTypes'
import axios from 'axios'

export const fetchTeamsRequest = () => {
    return {
        type : FETCH_TEAMS_REQUEST
    }
}

export const fetchTeamsSuccess = teams => {
    return {
        type : FETCH_TEAMS_SUCCESS,
        payload : teams
    }
}

export const fetchTeamsFailure = error => {
    return {
        type : FETCH_TEAMS_FAILURE,
        payload : error
    }
}

export const addTeam = (team) =>{
    return {
        type : ADD_TEAM,
        payload : team
    }
}

export const fetchTeams = () => {
    return function(dispatch){
        dispatch(fetchTeamsRequest())
     axios.get('http://localhost:3000/teams/')
     .then(response =>{
         const teams = response.data
         dispatch(fetchTeamsSuccess(teams))
     })
     .catch(error=>{
         // error.message is the error description
         dispatch(fetchTeamsFailure(error.message))
     })
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