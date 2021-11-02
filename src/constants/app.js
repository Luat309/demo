// localhost
const DOMAIN = "http://localhost:8080/";
// production
// const PRODUCTION = "";

export const REACT_APP_URL_API = "http://35.240.196.153/api";

export const THEME = [
  {
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
  CHO_DUYET: 3
};

export const ROLE = {
  TRUONG_PHONG_NHAN_SU: 1,
  HR: 3,
  USER: 4,
};

export const VI_TRI_TUYEN_DUNG = [];

export const INVALID_FORM_MESSAGE = {
  INVALID_EMPTY: "Không được để trống trường này!",
  INVALID_EMAIL: "Email không hợp lệ"
};
