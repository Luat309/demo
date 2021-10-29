import { BreadCrumb } from "primereact/breadcrumb";

const CustomBreadCrumb = ({ items }) => {
  const home = {
    icon: "pi pi-home",
    url: "/dashboard",
  };

  return <BreadCrumb className="mb-10" model={items} home={home} />;
};

export default CustomBreadCrumb;
