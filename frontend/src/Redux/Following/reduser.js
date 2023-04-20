export const reducerName = (state = {}, action) => {
    switch (action.type) {
        case 'DATA':
            return action.payload
        default:
            return state
    }
}