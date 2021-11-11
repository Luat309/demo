import { Tree } from "primereact/tree";
import { useState } from "react";

const features = [
  {
    key: "999",
    label: "Nhóm chức năng",
    children: [
      {
        key: "0",
        label: "Yêu cầu tuyển dụng",
        children: [
          { key: "1", label: "Danh sách yêu cầu" },
          { key: "2", label: "Tạo yêu cầu" },
          { key: "3", label: "Cập nhật yêu cầu" },
          { key: "4", label: "Xóa yêu cầu" },
          { key: "5", label: "Phê duyệt yêu cầu" },
          { key: "6", label: "Từ chối yêu cầu" },
          { key: "7", label: "Chi tiết yêu cầu" },
        ],
      },
      {
        key: "8",
        label: "Ứng viên",
        children: [
          { key: "9", label: "Danh sách ứng viên" },
          { key: "10", label: "Tạo nguồn ứng viên" },
          { key: "11", label: "Cập nhật ứng viên" },
          { key: "12", label: "Xóa ứng viên" },
          { key: "15", label: "Chi tiết ứng viên" },
        ],
      },
      {
        key: "16",
        label: "Lịch phỏng vấn",
        children: [
          { key: "17", label: "Danh sách lịch phỏng vấn" },
          { key: "18", label: "Tạo lịch phỏng vấn" },
          { key: "19", label: "Chi tiết lịch phỏng vấn" },
        ],
      },
      {
        key: "20",
        label: "Đánh giá ứng viên",
        children: [
          { key: "21", label: "Đánh giá" },
          { key: "22", label: "Tạo đánh giá ứng viên" },
          { key: "23", label: "Chi tiết lịch phỏng vấn" },
          { key: "24", label: "Sửa đánh giá" },
          { key: "25", label: "Chi tiết đánh giá" },
        ],
      },
    ],
  },
];

const FeaturesDialog = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  console.log("LOG BUG", selectedKey);

  return (
    <Tree
      value={features}
      selectionMode="checkbox"
      selectionKeys={selectedKey}
      onSelectionChange={(e) => setSelectedKey(e.value)}
    />
  );
};

export default FeaturesDialog;
