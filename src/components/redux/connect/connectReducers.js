import { CONNECT_USER, DISCONNECT_USER } from "./connectTypes"

const initialUserState = {
    "_id": "",
    "Firstname": "",
    "Lastname": "",
    "Avatar": "",
    "Whishlist": [],
    "Date_birth": "",
    "Address": "",
    "Phone": "",
    "Team":"",
    "Bottles":"",
    "Score": ""
}

const initialState = {
    connected: false,
    user: initialUserState,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_USER:
            return {
                connected: true,
                user: action.payload
            }
            case DISCONNECT_USER:
                return {
                    connected: false,
                    user: initialUserState
                }
        default: return state
    }
}
export default reducer