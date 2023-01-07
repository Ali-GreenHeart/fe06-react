export const CounterActionTypes = {
    plus: '0',
    minus: '1',
    reset: '2',
    special: '3'
}
const initialStore = {
    count: 0
}

export const counter_reducer = (store = initialStore, action) => {
    switch (action.type) {
        case CounterActionTypes.plus:
            return { ...store, count: store.count + 1 }
        case CounterActionTypes.minus:
            return { ...store, count: store.count - 1 }
        case CounterActionTypes.reset:
            return { ...store, count: 0 }
        case CounterActionTypes.special:
            return { ...store, count: action.data }
        default:
            return store;
    }
}