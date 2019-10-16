export function updateUser(username, password, address, number){
    return {
        type:'UPDATE_USER_AND_PASS',
        payload:{
            username,
            password,
            address,
            number
        }
    }
}
export function deleteUser(){
    return {
        type:'DELETE_USER',
}}
