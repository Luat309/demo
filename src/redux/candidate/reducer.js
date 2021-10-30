const { GET_CANDIDATE } = require("./contanst");

const initialState = {
    cadidate: []
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_CANDIDATE:
            return {...state, cadidates: payload }

        default:
            return state
    }
}
export default reducer