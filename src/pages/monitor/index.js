import AllMonitors from "@/components/UI/AllMonitors";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Monitor = ({ allMonitors }) => {
  return (
    <div>
      <AllMonitors allMonitors={allMonitors}></AllMonitors>
    </div>
  );
};

export default Monitor;
Monitor.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/monitors");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allMonitors: data.data,
    },
    revalidate: 10,
  };
};
