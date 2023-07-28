import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Motherboard = () => {
  return <div>motherrrrrrrrrrrr</div>;
};

export default Motherboard;
Motherboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
