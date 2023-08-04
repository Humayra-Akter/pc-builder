import { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Link from "next/link";
import { useCartContext } from "../../components/UI/CartContext";
import Cart from "@/components/UI/Cart";

const { Meta } = Card;

const PcBuilderPage = ({
  allProcessors,
  allMonitors,
  allMotherboards,
  allRams,
  allPowerSupplyUnits,
  allStorageDevices,
}) => {
  const { addToCart, selectedCategories } = useCartContext();
  const [isPlaceOrderEnabled, setIsPlaceOrderEnabled] = useState(false);

  // Check if at least one component is selected for each category
  const checkCategoriesSelection = () => {
    setIsPlaceOrderEnabled(
      selectedCategories.includes("CPU / Processor") &&
        selectedCategories.includes("Motherboard") &&
        selectedCategories.includes("RAM") &&
        selectedCategories.includes("Power Supply Unit") &&
        selectedCategories.includes("Storage Device") &&
        selectedCategories.includes("Monitor")
    );
  };
  return (
    <div className="pc-builder-page">
      <Row gutter={8}>
        <Col span={4}>
          <Card title="CPU / Processor">
            <Button>
              <Link href="/processor">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Card title="Motherboard">
            <Button>
              <Link href="/motherboard">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Card title="RAM">
            <Button>
              <Link href="/ram">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Card title="Power Supply Unit">
            <Button>
              <Link href="/powerSupplyUnit">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Card title="Storage Device">
            <Button>
              <Link href="/storageDevice">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={4}>
          <Card title="Monitor">
            <Button>
              <Link href="/monitor">Select</Link>
            </Button>
          </Card>
        </Col>
      </Row>
      <Cart></Cart>
      <Button
        type="primary"
        disabled={!isPlaceOrderEnabled}
        onClick={() => console.log("Place order clicked")}
      >
        Place Order
      </Button>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps = async () => {
  const processorRes = await fetch("http://localhost:5000/processors");
  const monitorRes = await fetch("http://localhost:5000/monitors");
  const motherboardRes = await fetch("http://localhost:5000/motherboards");
  const ramRes = await fetch("http://localhost:5000/rams");
  const powerSupplyUnitsRes = await fetch(
    "http://localhost:5000/powerSupplyUnits"
  );
  const storageDevicesRes = await fetch("http://localhost:5000/storageDevices");

  const processorData = await processorRes.json();
  const monitorData = await monitorRes.json();
  const motherboardData = await motherboardRes.json();
  const ramData = await ramRes.json();
  const powerSupplyUnitsData = await powerSupplyUnitsRes.json();
  const storageDevicesData = await storageDevicesRes.json();

  return {
    props: {
      allProcessors: processorData,
      allMonitors: monitorData,
      allMotherboards: motherboardData,
      allRams: ramData,
      allPowerSupplyUnits: powerSupplyUnitsData,
      allStorageDevices: storageDevicesData,
    },
  };
};
