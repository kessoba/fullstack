export function getUserDetails(){
    let user = JSON.parse(localStorage.getItem('users'));
    return user;
}