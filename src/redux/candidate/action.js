const { default: CandidateService } = require("services/CandidateService");
const { GET_CANDIDATE, CREATE_CANDIDATE, EDIT_CANDIDATE } = require("./contanst");

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
const editCandidate = (item) => async(dispatch) => {
    try {
        const res = await service.editCandidate(item.id, item)
        dispatch({ type: EDIT_CANDIDATE, payload: res.data })
    } catch (error) {

    }

}
export { getCandidate, addCandidate, editCandidate }