import { lazy } from "react";
import {
  CANDIDATE,
  INTERVIEW,
//   CANDIDATE_CREATE,
//   INTERVIEW,
//   INTERVIEW_CREATE,
  JOBREQUEST,
//   JOBREQUEST_CREATE,
//   REPORT,
//   JOBREQUEST_EDIT,
} from "constants/appPath";

const CandidateList = lazy(() => import("features/candidate/CandidateList"));
const JobRequestList = lazy(() => import("features/jobRequest/JobRequestList"));

const InterviewList = lazy(() => import("features/interview/InterviewList"));

const routes = [
  {
    path: JOBREQUEST,
    name: "dashboard",
    component: JobRequestList,
    exact: true,
  },
  {
    path: CANDIDATE,
    name: "candidate",
    component: CandidateList,
    exact: true,
  },
  {
    path: INTERVIEW,
    name: "interview",
    component: InterviewList,
    exact: true,
  }
];

export default routes;
