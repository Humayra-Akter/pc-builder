import AllPowerSupplyUnit from "@/components/UI/AllPowerSupplyUnit";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const PowerSupplyUnit = ({ allPowerSupplyUnits }) => {
  return (
    <div>
      <AllPowerSupplyUnit
        allPowerSupplyUnits={allPowerSupplyUnits}
      ></AllPowerSupplyUnit>
    </div>
  );
};

export default PowerSupplyUnit;

PowerSupplyUnit.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/powerSupplyUnits");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allPowerSupplyUnits: data,
    },
    revalidate: 10,
  };
};
