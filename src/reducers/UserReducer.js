export const ActionTypes = {
    loadUsers: '0',
    removeUsers: '1',
    addUser: '2',
    removeFirstUser: '3'
}



const reducer = (store, action) => {
    switch (action.type) {
        case ActionTypes.loadUsers:
            return [...action.data]
        case ActionTypes.removeUsers:
            return []
        case ActionTypes.addUser:
            return [...store, action.data]
        case ActionTypes.removeFirstUser:
            return store.slice(1, store.length)
        default:
            return store;
    }
}
export default reducer;