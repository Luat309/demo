import { Button } from "primereact/button";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCandidateInterviews } from "redux/candidateInterview/selector";
import genElementsForm from "utils/genElementsForm";
import "./style.scss";

// const items = [{ label: "Đánh Giá Ứng viên" }, { label: "Sửa Đánh giá" }];
const EditCandidateInterview = () => {
	const { id } = useParams();
	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();
	const candidateInterview = useSelector(getCandidateInterviews);
	const option = [
		{ id: 1, name: "1" },
		{ id: 2, name: "2" },
		{ id: 3, name: "3" },
		{ id: 4, name: "4" },
		{ id: 5, name: "5" },
	];
	const result = [
		{ id: "Pass", name: "Pass" },
		{ id: "Fail", name: "Fail" },
		{ id: "Phỏng vấn tiếp", name: "Phỏng vấn tiếp" },
	];

	const fields = [
		{
			label: "Hệ thống,login",
			name: "thinking",
			type: "dropdown",
			options: option,
			autoFocus: true,
			default: {},
		},
		{
			label: "Kiên trì bền bỉ",
			name: "persistent_perseverance",
			options: option,
			type: "dropdown",
		},
		{
			label: "Đam mê mục tiêu rõ ràng",
			name: "career_goals",
			options: option,
			type: "dropdown",
		},
		{
			label: "Thời gian có thể onboard",
			name: "time_onbroad",
			type: "calender",
		},
		{
			label: "Chuyên môn",
			name: "specialize_skill",
			type: "dropdown",
			options: option,
			optionLabel: "name",
		},
		{
			label: "Tiếng anh",
			name: "english",
			type: "dropdown",
			options: option,
			optionLabel: "name",
		},
		{
			label: "Khả năng thích ứng ",
			name: "adaptability",
			type: "dropdown",
			options: option,
			optionLabel: "name",
		},
		{
			label: "Kết quả",
			name: "result",
			type: "dropdown",
			options: result,
		},

		{
			label: "Nhận xét",
			name: "reviews",
			type: "editor",
		},
	];
	useEffect(() => {
		const find = candidateInterview.find((item) => item.id === Number(id));
		reset({ ...find });
	}, [candidateInterview, id, reset]);

	const formRender = genElementsForm(fields, control, errors);
	const onSubmit = (data) => {};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-fluid p-formgrid p-grid">{formRender}</div>

			<Button
				style={{
					display: "block",
					margin: "0 auto",
					marginTop: "30px",
				}}
				type="submit"
				label={"Lưu"}
			/>
		</form>
	);
};

export default EditCandidateInterview;
