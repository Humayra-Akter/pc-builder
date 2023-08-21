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
    "https://pc-builder-sage-pi.vercel.app/api/processors"
  ); //connected with mongoDB
  const data = await res.json();
  return {
    props: {
      allProcessors: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};
