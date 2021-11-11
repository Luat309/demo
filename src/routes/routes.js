import { lazy } from "react";
import {
  CANDIDATE,
  INTERVIEW,
  INTERVIEW_CREATE,
  CANDIDATE_CREATE,
  CANDIDATE_EDIT,
  //   INTERVIEW,
  //   INTERVIEW_CREATE,
  JOBREQUEST,
  JOBREQUEST_CREATE,
  JOBREQUEST_EDIT,
  //   REPORT,
  CANDIDATE_INTERVIEW_LIST,
  CANDIDATE_INTERVIEW_SHOW,
  CANDIDATE_INTERVIEW_EDIT,
  FEATURE,
} from "constants/appPath";
import { USER } from "../constants/appPath";

const CandidateList = lazy(() => import("features/candidate/CandidateList"));
const CandidateCreate = lazy(() => import("features/candidate/CandidateCreat"));
const CandidateEdit = lazy(() => import("features/candidate/CandidateEdit"));
const JobRequestList = lazy(() => import("features/jobRequest/JobRequestList"));
const JobRequestInsert = lazy(() => import("features/jobRequest/FormInsert"));
const JobRequestUpdate = lazy(() => import("features/jobRequest/FormUpdate"));

const InterviewList = lazy(() => import("features/interview/InterviewList"));
const CreateFormNPV = lazy(() => import("features/interview/CreateFormNPV"));

const CandidateInterviewList = lazy(() =>
  import("features/review/CandidateInterviewList")
);
const CandidateInterviewShow = lazy(() =>
  import("features/review/CandidateInterViewShow")
);
const EditCandidateInterview = lazy(() =>
  import("features/review/EditCandidateInterview")
);

const UserManage = lazy(() => import("features/user/UserManage"));
const FeatureManage = lazy(() => import("features/feature/FeatureManage"));

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
    path: CANDIDATE_CREATE,
    name: "candidateCreate",
    component: CandidateCreate,
    exact: true,
  },
  {
    path: CANDIDATE_EDIT,
    name: "candidateCreate",
    component: CandidateEdit,
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
  {
    path: CANDIDATE_INTERVIEW_LIST,
    name: "candidateInterviewList",
    component: CandidateInterviewList,
    exact: true,
  },
  {
    path: CANDIDATE_INTERVIEW_SHOW,
    name: "candidateInterviewShow",
    component: CandidateInterviewShow,
    exact: true,
  },
  {
    path: CANDIDATE_INTERVIEW_EDIT,
    name: "candidateInterviewEdit",
    component: EditCandidateInterview,
    exact: true,
  },
  {
    path: USER,
    name: "user",
    component: UserManage,
    exact: true,
  },
  {
    path: FEATURE,
    name: "feature",
    component: FeatureManage,
    exact: true,
  },
];

export default routes;
