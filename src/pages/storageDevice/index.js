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
  const res = await fetch(
    " https://pc-builder-sage-pi.vercel.app/api/storageDevices"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allStorageDevices: data.data,
    },
    revalidate: 10,
  };
};
