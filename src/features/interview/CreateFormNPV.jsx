import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import CustomBreadCrumb from "components/CustomBreadCrumb";
import InputTextController from "components/InputTextController";
import CalenderController from "components/CalenderController";
import DropdownController from "components/DropdownController";
import ChipsController from "components/ChipsController";
import MultiSelectController from "components/MultiSelectController";
import { getApprovedJobRequest } from "redux/jobRequest/selector";
import { getCandidates } from "redux/candidate/selector";
import { ROUND_INTERVIEW } from "constants/app";
import { createInterview } from "redux/interview/actionCreator";
import { useState } from "react";
import genElementsForm from "utils/genElementsForm";

const items = [{ label: "Lịch phỏng vấn" }, { label: "Tạo lịch phỏng vấn" }];

const FormInsertInterview = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [loading, setLoading] = useState(false);

	const approvedJobRequest = useSelector(getApprovedJobRequest);
	const candidates = useSelector(getCandidates);
	const users = [
		{ id: 1, name: "Hoàng Vân Anh" },
		{ id: 2, name: "Vũ Quốc Luật" },
		{ id: 3, name: "Nguyễn Thị Thu Trang" },
		{ id: 4, name: "Đỗ Phương Hoa" },
	];

	const fields = [
		{
			label: "Thời gian bắt đầu",
			name: "time_start",
			type: "calender",
			showTime: true,
			autoFocus: true,
		},
		{ label: "Tiêu đề", name: "title", type: "inputText" },
		{
			label: "Thời gian kết thúc",
			name: "time_end",
			type: "calender",
			showTime: true,
		},
		{
			label: "Người phỏng vấn",
			name: "receiver",
			type: "multiSelect",
			options: users,
			optionLabel: "name",
		},
		{ label: "Địa điểm", name: "location", type: "inputText" },
		{
			label: "Ứng viên",
			name: "name_candidate",
			type: "multiSelect",
			options: candidates,
			optionLabel: "name",
		},
		{
			label: "Yêu cầu tuyển dụng",
			name: "job_id",
			type: "dropdown",
			options: approvedJobRequest,
			optionLabel: "title",
		},
		{
			label: "Vòng phỏng vấn",
			name: "round_no",
			type: "dropdown",
			options: ROUND_INTERVIEW,
			optionLabel: "title",
		},
	];

	const formRender = genElementsForm(fields, control, errors);

	const onSubmit = (data) => {
		try {
			setLoading(true);
			dispatch(
				createInterview(
					{
						...data,
						job_id: data.job_id?.id,
						receiver: data.receiver
							.map((item) => item.id)
							.join(","),
						name_candidate: data.name_candidate
							.map((item) => item.id)
							.join(","),
						totalReceiver: data.receiver
							.map((item) => item.id)
							.join(",")
							.split(",").length,
					},
					() => history.push("/admin/interview")
				)
			);
		} catch (error) {
			return error;
		}
	};

	return (
		<>
			<CustomBreadCrumb items={items} />
			<div className="card">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="p-fluid p-formgrid p-grid">
						{formRender}
					</div>
					<Button
						loading={loading}
						type="submit"
						label="Thêm lịch phỏng vấn"
					/>
				</form>
			</div>
		</>
	);
};

export default FormInsertInterview;
