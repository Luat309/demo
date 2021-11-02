import { lazy } from "react";
import {
  CANDIDATE,
  INTERVIEW,
  INTERVIEW_CREATE,
  //   CANDIDATE_CREATE,
  //   INTERVIEW,
  //   INTERVIEW_CREATE,
  JOBREQUEST,
  JOBREQUEST_CREATE,
  JOBREQUEST_EDIT,
  //   REPORT,
} from "constants/appPath";

const CandidateList = lazy(() => import("features/candidate/CandidateList"));
const JobRequestList = lazy(() => import("features/jobRequest/JobRequestList"));
const JobRequestInsert = lazy(() => import("features/jobRequest/FormInsert"));
const JobRequestUpdate = lazy(() => import("features/jobRequest/FormUpdate"));

const InterviewList = lazy(() => import("features/interview/InterviewList"));
const CreateFormNPV = lazy(() => import("features/interview/CreateFormNPV"));

const routes = [
  {
    path: JOBREQUEST,
    name: "jobrequestList",
    component: JobRequestList,
    exact: true,
  },
  {
    path: JOBREQUEST_CREATE,
    name: "jobrequestInsert",
    component: JobRequestInsert,
    exact: true,
  },
  {
    path: JOBREQUEST_EDIT,
    name: "jobrequestUpdate",
    component: JobRequestUpdate,
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
  },
  {
    path: INTERVIEW_CREATE,
    name: "interviewCreate",
    component: CreateFormNPV,
    exact: true,
  },
];

export default routes;
