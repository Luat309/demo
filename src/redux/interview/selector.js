export const getInterviews = (state) => {
	const jobRequest = {};

	if (Array.isArray(state?.cadidate?.cadidate)) {
		state?.jobRequest?.data.forEach((item) => {
			jobRequest[item.id] = item;
		});
	}

	return state.interview.data.map((item) => {
		return {
			...item,
			job_name: jobRequest[item.job_id]?.title,
			time_interview: item.time_start + " - " + item.time_end,
			candidate_name: item?.name_candidate?.name,
			// receiver: item.receiver?.name,
		};
	});
};
export const getStatusInterview = (state) => state.interview.status;
