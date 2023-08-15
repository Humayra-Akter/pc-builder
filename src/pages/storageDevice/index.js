import ALllStorageDevices from "@/components/UI/ALllStorageDevices";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const StorageDevice = ({ allStorageDevices }) => {
  return (
    <div>
      <ALllStorageDevices
        allStorageDevices={allStorageDevices}
      ></ALllStorageDevices>
    </div>
  );
};

export default StorageDevice;

StorageDevice.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(" http://localhost:5000/storageDevices");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allStorageDevices: data,
    },
    revalidate: 10,
  };
};
