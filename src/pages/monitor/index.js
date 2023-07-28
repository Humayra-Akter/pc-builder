import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Monitor = () => {
  return <div>Monitorrrrrrrrrrrrr</div>;
};

export default Monitor;
Monitor.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
