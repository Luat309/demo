import { Link } from "react-router-dom";

export const JOBREQUEST = "/admin/jobrequest";
export const JOBREQUEST_CREATE = "/admin/jobrequest/create";
export const JOBREQUEST_EDIT = "/admin/jobrequest/edit/:id";

export const CANDIDATE = "/admin/candidate";
export const CANDIDATE_CREATE = "/admin/candidate/create";
export const CANDIDATE_EDIT = "/admin/candidate/edit/:id";

export const ASSESSMENT = "/admin/assessment";

export const REPORT = "/admin/report";

export const USER = "/admin/user";

export const INTERVIEW = "/admin/interview";
export const INTERVIEW_CREATE = "/admin/interview/create";

export const CANDIDATE_INTERVIEW_LIST = "/admin/candidate/interview";
export const CANDIDATE_INTERVIEW_SHOW = "/admin/candidate/interview/show";
export const CANDIDATE_INTERVIEW = "/admin/candidate/interview/review";
export const CANDIDATE_INTERVIEW_EDIT = "/admin/candidate/interview/edit/:id";

export const APP_MENU_ITEM = [
  {
    label: "Yêu cầu tuyển dụng",
    icon: "pi pi-fw pi-users",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={JOBREQUEST}>
                    Danh sách yêu cầu{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={JOBREQUEST_CREATE}>
                    Tạo yêu cầu{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Ứng viên",
    icon: "pi pi-fw pi-video",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={CANDIDATE}>
                    Danh sách ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={CANDIDATE_CREATE}>
                    Tạo nguồn ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Lịch phỏng vấn",
    icon: "pi pi-fw pi-cog",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={INTERVIEW}>
                    Danh sách lịch phỏng vấn{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to={INTERVIEW_CREATE}>
                    Tạo lịch người phỏng vấn{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Đánh giá ứng viên",
    icon: "pi pi-fw pi-calendar",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link
                    className="p-menuitem-link"
                    to={CANDIDATE_INTERVIEW_LIST}
                  >
                    Tạo đánh giá ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link
                    className="p-menuitem-link"
                    to={CANDIDATE_INTERVIEW_SHOW}
                  >
                    Đánh giá{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Báo cáo",
    icon: "pi pi-fw pi-cog",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to="/admin/candidate">
                    Danh sách ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link
                    className="p-menuitem-link"
                    to="/admin/candidate/create"
                  >
                    Tạo nguồn ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
  {
    label: "Quản lý User",
    icon: "pi pi-fw pi-cog",
    items: [
      [
        {
          items: [
            {
              template: () => (
                <li className="p-menuitem">
                  <Link className="p-menuitem-link" to="/admin/candidate">
                    Danh sách ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
            {
              template: () => (
                <li className="p-menuitem">
                  <Link
                    className="p-menuitem-link"
                    to="/admin/candidate/create"
                  >
                    Tạo nguồn ứng viên{" "}
                  </Link>{" "}
                </li>
              ),
            },
          ],
        },
      ],
    ],
  },
];
