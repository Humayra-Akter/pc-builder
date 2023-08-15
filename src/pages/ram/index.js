import AllRams from "@/components/UI/AllRams";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Ram = ({ allRams }) => {
  return (
    <div>
      <AllRams allRams={allRams}></AllRams>
    </div>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/rams");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allRams: data,
    },
    revalidate: 10,
  };
};
