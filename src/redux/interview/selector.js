export const getInterviews = (state) => {
  const jobRequest = {};
  const candidate = {};

  state?.jobRequest?.data.forEach((item) => {
    jobRequest[item.id] = item;
  });

  state?.cadidate?.cadidate.forEach((item) => {
    candidate[item.id] = item;
  });

  return state.interview.data.map((item) => {
    return {
      ...item,
      job_name: jobRequest[item.job_id]?.title,
      time_interview: item.time_start + " - " + item.time_end,
      candidate_name: candidate?.[item.name_candidate]?.name
    };
  });
};
export const getStatusInterview = (state) => state.interview.status;
