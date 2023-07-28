import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const StorageDevice = () => {
  return <div>StorageDevice</div>;
};

export default StorageDevice;

StorageDevice.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
