export function usersTableReducer(state={users: [] },action){
    switch(action,type){
        case 'WRITE_USERS':{
            return{
                ...state
            }
        }
    
    
        case 'WRITE_USERS':{
            return{
                ...state,users:action.payload
            }
        }
    
        case 'WRITE_USERS':{
            return{
                ...state
            }
        }
    
    default:{
        return{...state}
    }

}
}