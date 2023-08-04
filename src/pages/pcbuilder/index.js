import React from "react";
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
  const { addToCart } = useCartContext();

  return (
    <div className="pc-builder-page">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="CPU / Processor">
            <Button
              onClick={() => {
                addToCart(allProcessors);
              }}
            >
              <Link href="/processor">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Motherboard">
            <Button
              onClick={() => {
                addToCart(allMotherboards);
              }}
            >
              <Link href="/motherboard">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="RAM">
            <Button
              onClick={() => {
                addToCart(allRams);
              }}
            >
              <Link href="/ram">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Power Supply Unit">
            <Button
              onClick={() => {
                addToCart(allPowerSupplyUnits);
              }}
            >
              <Link href="/powerSupplyUnit">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Storage Device">
            <Button
              onClick={() => {
                addToCart(allStorageDevices);
              }}
            >
              <Link href="/storageDevice">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Monitor">
            <Button
              onClick={() => {
                addToCart(allMonitors);
              }}
            >
              <Link href="/monitor">Select</Link>
            </Button>
          </Card>
        </Col>
      </Row>
      <Cart></Cart>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:5000/processors");
//   const data = await res.json();
//   return {
//     props: {
//       allProcessors: data,
//     },
//   };
// };

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
