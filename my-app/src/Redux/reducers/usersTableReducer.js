export function usersTableReducer (state = { users: [] }, action) {
    switch (action.type) {
        case 'WRITE_USERS': {
            return {
                ...state, users: action.payload
            }
        }
        case 'SAVE_USER': {

            const newUser=action.payload
            if(!newUser.id){
                const oldArray = state.users.slice()
                newUser.id = state.users.lenght + 1
                newArray.push(newUser)
            }
            else{
                const newArray=state.users.slice()
                const user = newArray.find((element)=>{
                    return element.id===newUser.id
                })
            }
            return {
                ...state
            }
        }
        case 'DELETE_USER': {
            return {
                ...state
            }
        }
        default: {
            return {...state}
        }
    }
}