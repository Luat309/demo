// localhost
const DOMAIN = "http://localhost:8080/";
export const NODEJS = "http://localhost:3000/";
// production
// const DOMAIN = "http://35.198.236.142/";
// export const NODEJS = "http://34.124.182.156:3000/";

export const REACT_APP_URL_API = "http://34.124.182.156/api";

export const THEME = [{
        href: DOMAIN + "themes/bootstrap4-light-blue/theme.css",
        img: DOMAIN + "imgs/bootstrap4-light-blue.svg",
    },
    {
        href: DOMAIN + "themes/bootstrap4-light-purple/theme.css",
        img: DOMAIN + "imgs/bootstrap4-light-purple.svg",
    },
    {
        href: DOMAIN + "themes/bootstrap4-dark-blue/theme.css",
        img: DOMAIN + "imgs/bootstrap4-dark-blue.svg",
    },
    {
        href: DOMAIN + "themes/bootstrap4-dark-purple/theme.css",
        img: DOMAIN + "imgs/bootstrap4-dark-blue.svg",
    },
    {
        href: DOMAIN + "themes/md-light-indigo/theme.css",
        img: DOMAIN + "imgs/md-light-indigo.svg",
    },
    {
        href: DOMAIN + "themes/md-light-deeppurple/theme.css",
        img: DOMAIN + "imgs/md-light-deeppurple.svg",
    },
    {
        href: DOMAIN + "themes/md-dark-indigo/theme.css",
        img: DOMAIN + "imgs/md-dark-indigo.svg",
    },
    {
        href: DOMAIN + "themes/md-dark-deeppurple/theme.css",
        img: DOMAIN + "imgs/md-dark-deeppurple.svg",
    },
    {
        href: DOMAIN + "themes/mdc-light-indigo/theme.css",
        img: DOMAIN + "imgs/md-light-indigo.svg",
    },
    {
        href: DOMAIN + "themes/mdc-light-deeppurple/theme.css",
        img: DOMAIN + "imgs/md-light-deeppurple.svg",
    },
    {
        href: DOMAIN + "themes/mdc-dark-indigo/theme.css",
        img: DOMAIN + "imgs/md-dark-indigo.svg",
    },
    {
        href: DOMAIN + "themes/mdc-dark-deeppurple/theme.css",
        img: DOMAIN + "imgs/md-dark-deeppurple.svg",
    },
    {
        href: DOMAIN + "themes/fluent-light/theme.css",
        img: DOMAIN + "imgs/fluent-light.png",
    },
    {
        href: DOMAIN + "themes/tailwind-light/theme.css",
        img: DOMAIN + "imgs/tailwind-light.png",
    },
];

export const LAYOUT = [
    { name: "Vertical", code: "VERTICAL" },
    { name: "Horizontal", code: "HORIZONTAL" },
];

export const STATUS_REQUEST = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    SUCCEEDED: "SUCCEEDED",
    ERROR: "ERROR",
};

export const APPROVAL_STATUS = {
    TU_CHOI: 0,
    DA_DUYET: 1,
    HET_HAN: 2,
    CHO_DUYET: 3,
};

export const ROLE = {
    TRUONG_PHONG_NHAN_SU: 1,
    HR: 3,
    USER: 4,
};

export const MANAGER = 0; // truong phong
export const HR_MANAGER = 1; // truong phong nhan su
export const HR = 2; // hr
export const INTERVIEWER = 3; // nguoi phong van

export const ACCOUNT_STATUS = {
    0: "Ngừng hoạt động",
    1: "Hoạt động",
};
export const POSITION = {
    0: "Trưởng phòng",
    1: "Trưởng phòng nhân sự",
    2: "Hr",
    3: "Người phỏng vấn"
};

export const VI_TRI_TUYEN_DUNG = [];

export const INVALID_FORM_MESSAGE = {
    INVALID_EMPTY: "Không được để trống trường này!",
    INVALID_EMAIL: "Email không hợp lệ",
};

export const ROUND_INTERVIEW = [
    { id: 1, title: "Vòng 1", value: 1 },
    { id: 2, title: "Vòng 2", value: 2 },
    { id: 3, title: "Vòng Final", value: 3 },
];