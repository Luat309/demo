import CustomBreadCrumb from "components/CustomBreadCrumb"

const CandidateList = () => {
  const items = [{ label: "Ứng viên" }, { label: " Danh sách ứng viên" }];

  return (
    <>
      <CustomBreadCrumb items={items} />
      <div className="card">STT</div>
    </>
  );
};

export default CandidateList;
