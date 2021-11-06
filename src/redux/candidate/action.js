const { default: CandidateService } = require("services/CandidateService");
const { GET_CANDIDATE, CREATE_CANDIDATE, EDIT_CANDIDATE, DELETE_CANDIDATE } = require("./contanst");

const service = new CandidateService();

const getCandidate = () => async(dispatch) => {
    try {
        const res = await service.searchCandidateList()
        dispatch({ type: GET_CANDIDATE, payload: res.data })
    } catch (error) {

    }
};
const addCandidate = (item) => async(dispatch) => {
    try {
        const res = await service.createCandidate(item)
        dispatch({ type: CREATE_CANDIDATE, payload: res.data })
    } catch (error) {

    }
}
const editCandidate = (id, item) => async(dispatch) => {
    try {
        const res = await service.editCandidate(id, item)
        dispatch({ type: EDIT_CANDIDATE, payload: res.data })
    } catch (error) {

    }

}
const removeCandidate = (id) => async(dispatch) => {
    try {
        await service.deleteCandidate(id)
        dispatch({ type: DELETE_CANDIDATE, payload: id })
    } catch (error) {

    }

}
export { getCandidate, addCandidate, editCandidate, removeCandidate }