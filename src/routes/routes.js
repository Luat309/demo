import { lazy } from "react";
import {
  CANDIDATE,
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
];

export default routes;
