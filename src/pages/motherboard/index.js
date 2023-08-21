import AllMotherboards from "@/components/UI/AllMotherboards";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Motherboard = ({ allMotherboards }) => {
  return (
    <div>
      <AllMotherboards allMotherboards={allMotherboards}></AllMotherboards>
    </div>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-sage-pi.vercel.app/api/motherboards"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allMotherboards: data.data,
    },
    revalidate: 10,
  };
};
