export const getCandidateInterviews = (state) => {
  console.log(typeof state.interview.data, "sate");
  let candidate = {};
  state?.cadidate?.cadidate.forEach((item) => {
    candidate[item.id] = item;
  });

  let jobRequest = {};
  state?.jobRequest?.data.forEach((item) => {
    jobRequest[item.id] = item;
  });

  //   state?.interview?.data.forEach((item) => {
  //     console.log("hihi");
  //   });

  return state.candidateInterview.candidateInterview.map((item) => ({
    ...item,
    candidate_name: candidate?.[item.candidate_id]?.name,
    job_name: jobRequest?.[candidate?.[item.candidate_id]?.job_id]?.title,
    viTriUngTuyen:
      jobRequest?.[candidate?.[item.candidate_id]?.job_id]?.position,
  }));
};
