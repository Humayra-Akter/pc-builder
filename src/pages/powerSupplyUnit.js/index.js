import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const PowerSupplyUnit = () => {
  return <div>Power Supply Unit</div>;
};

export default PowerSupplyUnit;
PowerSupplyUnit.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
