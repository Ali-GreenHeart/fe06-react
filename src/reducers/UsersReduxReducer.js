export const ActionTypes = {
    loadUsers: '0',
    removeUsers: '1',
    addUser: '2',
    removeFirstUser: '3'
}

const initialStore = {
    users: []
}

export const redux_reducer = (store = initialStore, action) => {
    switch (action.type) {
        case ActionTypes.loadUsers:
            return { ...store, users: [...action.data] }
        case ActionTypes.removeUsers:
            return { ...store, users: [] }
        case ActionTypes.addUser:
            return { ...store, users: [...store.users, action.data] }
        case ActionTypes.removeFirstUser:
            return {...store, users: store.users.slice(1, store.length)}
        default:
            return store;
    }
}