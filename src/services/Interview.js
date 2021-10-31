import {
    INTERVIEW
} from "../constants/apiPath";
import { Utils } from "./util";

export default class CandidateService {
    interviewList() {
        return Utils.get(INTERVIEW);
    }

}