import { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "antd";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Link from "next/link";
import { useCartContext } from "../../components/UI/CartContext";
import Cart from "@/components/UI/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Meta } = Card;

const PcBuilderPage = () => {
  const { addToCart, selectedCategories } = useCartContext();
  const [isPlaceOrderEnabled, setIsPlaceOrderEnabled] = useState(false);

  // const checkCategoriesSelection = () => {
  //   setIsPlaceOrderEnabled(
  //     selectedCategories.includes("CPU / Processor") &&
  //       selectedCategories.includes("Motherboard") &&
  //       selectedCategories.includes("RAM") &&
  //       selectedCategories.includes("Power Supply Unit") &&
  //       selectedCategories.includes("Storage Device") &&
  //       selectedCategories.includes("Monitor")
  //   );
  // };

  useEffect(() => {
    // at least one component is selected
    setIsPlaceOrderEnabled(selectedCategories.length === 6);
  }, [selectedCategories]);

  const notify = () => {
    if (selectedCategories.length == 6) {
      toast.success("Proceed to your order!");
    } else if (selectedCategories.length != 6) {
      toast.warning("You have not selected all category");
    }
  };

  return (
    <div className="pc-builder-page">
      <Row gutter={16}>
        {/* Map over categories */}
        {[
          "processor",
          "motherboard",
          "ram",
          "powerSupplyUnit",
          "storageDevice",
          "monitor",
        ].map((category) => (
          <Col key={category} span={8}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: "black",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  margin: "10px",
                  marginBottom: "30px",
                  font: "cursive",
                  color: "white",
                  fontWeight: "900",
                }}
              >
                {category}
              </h1>
              <Button>
                <Link href={`/${category.replace(/\s/g, "")}`}>Select</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <Row gutter={16}>
        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                marginBottom: "30px",
                font: "cursive",
                color: "white",
                fontWeight: "900",
              }}
            >
              CPU / Processor
            </h1>
            <Button>
              <Link href="/processor">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                font: "cursive",
                marginBottom: "30px",
                color: "white",
                fontWeight: "900",
              }}
            >
              Motherboard
            </h1>
            <Button>
              <Link href="/motherboard">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                font: "cursive",
                marginBottom: "30px",
                color: "white",
                fontWeight: "900",
              }}
            >
              RAM
            </h1>
            <Button>
              <Link href="/ram">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                font: "cursive",
                marginBottom: "30px",
                color: "white",
                fontWeight: "900",
              }}
            >
              Power Supply Unit
            </h1>
            <Button>
              <Link href="/powerSupplyUnit">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                marginBottom: "30px",
                font: "cursive",
                color: "white",
                fontWeight: "900",
              }}
            >
              Storage Device
            </h1>
            <Button>
              <Link href="/storageDevice">Select</Link>
            </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                margin: "10px",
                marginBottom: "30px",
                font: "cursive",
                color: "white",
                fontWeight: "900",
              }}
            >
              Monitor
            </h1>
            <Button>
              <Link href="/monitor">Select</Link>
            </Button>
          </Card>
        </Col>
      </Row> */}
      <Cart></Cart>
      <Button
        type="primary"
        style={{
          marginTop: "40px",
          backgroundColor: "black",
          font: "cursive",
          color: "white",
          fontWeight: "900",
        }}
        disabled={selectedCategories.length != 1}
        onClick={notify}
      >
        <Link href="/orderConfirmation">Place Order</Link>
      </Button>
      <ToastContainer />
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

// export const getServerSideProps = async () => {
//   const processorRes = await fetch("http://localhost:5000/processors");
//   const monitorRes = await fetch("http://localhost:5000/monitors");
//   const motherboardRes = await fetch("http://localhost:5000/motherboards");
//   const ramRes = await fetch("http://localhost:5000/rams");
//   const powerSupplyUnitsRes = await fetch(
//     "http://localhost:5000/powerSupplyUnits"
//   );
//   const storageDevicesRes = await fetch("http://localhost:5000/storageDevices");

//   const processorData = await processorRes.json();
//   const monitorData = await monitorRes.json();
//   const motherboardData = await motherboardRes.json();
//   const ramData = await ramRes.json();
//   const powerSupplyUnitsData = await powerSupplyUnitsRes.json();
//   const storageDevicesData = await storageDevicesRes.json();

//   return {
//     props: {
//       allProcessors: processorData,
//       allMonitors: monitorData,
//       allMotherboards: motherboardData,
//       allRams: ramData,
//       allPowerSupplyUnits: powerSupplyUnitsData,
//       allStorageDevices: storageDevicesData,
//     },
//   };
// };
