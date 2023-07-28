import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Ram = () => {
  return <div>RAMMMMMMMM</div>;
};

export default Ram;
Ram.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
