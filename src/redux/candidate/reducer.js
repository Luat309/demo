const { GET_CANDIDATE, CREATE_CANDIDATE, DELETE_CANDIDATE, EDIT_CANDIDATE } = require("./contanst");


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
        case EDIT_CANDIDATE:
            {
                const filterCandidate = state.cadidate.map((item) => {
                    if (item.id === payload.id) {
                        return {...item, payload }
                    }
                    return item
                })
                return {...state, cadidate: filterCandidate }
            }

        case DELETE_CANDIDATE:
            {
                const filterCandidate = state.cadidate.filter((item) => item.id !== payload)
                return {...state, cadidate: filterCandidate }
            }

        default:
            return {...state }
    }
}
export default reducer