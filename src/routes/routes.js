import { lazy } from "react";
import {
    CANDIDATE,
    CANDIDATE_CREATE,
    CANDIDATE_EDIT,
    INTERVIEW,
    //   INTERVIEW_CREATE,
    JOBREQUEST,
    //   JOBREQUEST_CREATE,
    //   REPORT,
    //   JOBREQUEST_EDIT,
    CANDIDATE_INTERVIEW_LIST,
    CANDIDATE_INTERVIEW_EDIT,
    CANDIDATE_INTERVIEW,
    CANDIDATE_INTERVIEW_SHOW
} from "constants/appPath";


const CandidateList = lazy(() =>
    import ("features/candidate/CandidateList"));

const CandidateCreat = lazy(() =>
    import ("features/candidate/CandidateCreat"));

const CandidateEdit = lazy(() =>
    import ("features/candidate/CandidateEdit"));

const JobRequestList = lazy(() =>
    import ("features/jobRequest/JobRequestList"));

const InterviewList = lazy(() =>
    import ("features/interview/InterviewList"));

const CandidateInterviewList = lazy(() =>
    import ("features/review/CandidateInterviewList"));
const CandidateInterview = lazy(() =>
    import ("features/review/CandidateInterview"));
const CandidateInterviewShow = lazy(() =>
    import ("features/review/CandidateInterViewShow"));



const routes = [{
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
        path: CANDIDATE_CREATE,
        name: "candidate_creat",
        component: CandidateCreat,
        exact: true,
    },
    {
        path: CANDIDATE_EDIT,
        name: "candidate_edit",
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
        path: CANDIDATE_INTERVIEW_LIST,
        name: "candidate_interview_list",
        component: CandidateInterviewList,
        exact: true,
    },
    {
        path: CANDIDATE_INTERVIEW,
        name: "candidate_interview",
        component: CandidateInterview,
        exact: true,
    },
    {
        path: CANDIDATE_INTERVIEW_SHOW,
        name: "candidate_interview_show",
        component: CandidateInterviewShow,
        exact: true,
    }
]

export default routes;