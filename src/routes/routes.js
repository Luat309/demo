import { lazy } from "react";
import {
    CANDIDATE,
    CANDIDATE_CREATE,
    CANDIDATE_EDIT,
    //   INTERVIEW,
    //   INTERVIEW_CREATE,
    JOBREQUEST,
    //   JOBREQUEST_CREATE,
    //   REPORT,
    //   JOBREQUEST_EDIT,
} from "constants/appPath";

const CandidateList = lazy(() =>
    import ("features/candidate/CandidateList"));

const CandidateCreat = lazy(() =>
    import ("features/candidate/CandidateCreat"));

const CandidateEdit = lazy(() =>
    import ("features/candidate/CandidateEdit"));


const JobRequestList = lazy(() =>
    import ("features/jobRequest/JobRequestList"));



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
    }
];

export default routes;