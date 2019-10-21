export function writeUsersToStore(data){
    return{
        type:'WRITE_USERS',
        payload:data
    }
}
export function addUsersToStore(data){
    return{
        type:'SAVE_USER',
        payload:data
    }
}
export function removeUsersToStore(data){
    return{
        type:'DELETE_USER',
        payload:data
    }
}