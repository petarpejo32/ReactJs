export default function userReducer (
    state = {username: null, password: null, address: null, number: null}, action){
    switch (action.type) {
        case 'UPDATE_USER_AND_PASS':{
            return{
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                address: action.payload.address,
                number: action.payload.number
            }
        }
        case 'DELETE_USER':{
            return{
                ...state,
                username: null,
                password: null,
                address:null,
                number: null
            }
        }
        default:{
            return {...state}
        }
    }  
}
