export const getRoleCurrentUser = () => {
    if(localStorage.getItem("currentUser")) {
        const { user : { role } } = JSON.parse(localStorage.getItem("currentUser"));

        return role;
    }

    return null
}
