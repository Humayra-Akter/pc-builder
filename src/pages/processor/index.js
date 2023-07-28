import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const Processor = () => {
  return (
    <div>
      <h1>Processssssssssssor</h1>
    </div>
  );
};

export default Processor;
Processor.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
