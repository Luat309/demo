import CustomBreadCrumb from "components/CustomBreadCrumb";
import CustomDataTable from "components/CustomDataTable";
import { STATUS_REQUEST } from "constants/app";
import { Button } from "primereact/button";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { fetchInterview } from "redux/interview/actionCreator";
import { getInterviews, getStatusInterview } from "redux/interview/selector";
import { genColumns, genStyle } from "utils/genColumns";



const InterviewList = () => {
	const statusInterview = useSelector(getStatusInterview);
	const interviews = useSelector(getInterviews);

	const items = [
		{ label: "Lịch phỏng vấn" },
		{ label: "Danh sách lịch phỏng vấn" },
	];
	
	const genActionCol = (data) => {
		return (
			<>
				<Button
					tooltip="Xem chi tiết"
					// onClick={() => handleClickView(data)}
					className="p-button-rounded p-button-text p-button-info"
					icon="pi pi-eye"
				/>
			</>
		);
	};

	const cols = [
		{ field: "job_name", header: "Dự án", style: genStyle("250px") },
		{ field: "round_no", header: "Vòng", style: genStyle("100px") },
		{ field: "location", header: "Địa điểm", style: genStyle("150px") },
		{ field: "time_interview", header: "Thời gian", style: genStyle("200px") },
		{ field: "candidate_name", header: "Ứng viên", style: genStyle("150px") },
		{ field: "receiver", header: "Người phỏng vấn", style: genStyle("150px") },
		{ field: "action", body: genActionCol, header: <i className="pi pi-cog" />, style: genStyle("150px") },
	];

	const columns = genColumns(cols);

	return (
		<>
			<CustomBreadCrumb items={items} />

			{statusInterview === STATUS_REQUEST.LOADING &&
				"Đang tải dữ liệu..."}
			{statusInterview === STATUS_REQUEST.SUCCEEDED && (
				<div className="card">
					<CustomDataTable
						selectionMode="single"
						dataTable={interviews}
					>
						{columns}
					</CustomDataTable>
				</div>
			)}
		</>
	);
};

export default InterviewList;
