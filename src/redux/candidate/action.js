const { default: CandidateService } = require("services/CandidateService");
const { GET_CANDIDATE } = require("./contanst");

const service = new CandidateService();

const getCandidate = () => async(dispatch) => {
    try {
        const res = await service.searchCandidateList()
        dispatch({ type: GET_CANDIDATE, payload: res.data })
    } catch (error) {

    }
};
export { getCandidate }