const { GET_CANDIDATE, CREATE_CANDIDATE } = require("./contanst");


const initialState = {
    cadidate: []
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CANDIDATE:
            return {...state, cadidate: payload }
        case CREATE_CANDIDATE:
            return {...state, cadidate: {...state.cadidate, payload } }
        default:
            return state
    }
}
export default reducer