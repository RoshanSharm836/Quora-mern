const initialState = [];

export default function answerReducer(state=initialState, action) {
    if(action.type === "GET_QUESTIONS"){
        state = action.payload;
    }
    return state;
}