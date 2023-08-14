import AllProcessors from "@/components/UI/AllProcessors";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Processor = ({ allProcessors }) => {
  return (
    <div>
      <AllProcessors allProcessors={allProcessors}></AllProcessors>
    </div>
  );
};

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-sage-pi.vercel.app/processors"
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProcessors: data,
    },
    revalidate: 10,
  };
};
