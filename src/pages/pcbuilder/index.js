import { useState, useEffect } from "react";
import { Button, Card, Col, Row, Tooltip } from "antd";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import Link from "next/link";
import { useCartContext } from "../../components/UI/CartContext";
import Cart from "@/components/UI/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Meta } = Card;

const PcBuilderPage = () => {
  const { selectedCategories } = useCartContext();

  const handleAddToCart = async () => {
    try {
      const productIdsToAdd = selectedCategories
        .map((category) => {
          const categoryData = yourProductData[category];
          if (categoryData) {
            return categoryData.map((product) => product.id);
          }
          return [];
        })
        .flat();

      if (productIdsToAdd.length === 0) {
        toast.error("No items selected to add to cart");
        return;
      }

      const response = await fetch(
        "https://pc-builder-sage-pi.vercel.app/api/addToCart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productIds: productIdsToAdd }),
        }
      );

      if (response.ok) {
        toast.success("Items added successfully!");
      } else {
        toast.error("Error adding items to cart");
      }
    } catch (error) {
      console.error("Error adding items to cart:", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(
        "https://pc-builder-sage-pi.vercel.app/api/removeFromCart",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId }),
        }
      );

      if (response.ok) {
        toast.success("Item removed successfully!");
      } else {
        toast.error("Error removing item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const notify = () => {
    if (selectedCategories.length >= 6) {
      toast.success("Proceed to your order!");
    } else if (selectedCategories.length != 6) {
      toast.warning("You have not selected all category");
    }
  };

  return (
    <div className="pc-builder-page">
      <Row gutter={16}>
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
                  marginBottom: "20px",
                  font: "cursive",
                  color: "white",
                  fontWeight: "900",
                }}
              >
                {category}
              </h1>
              <Tooltip
                title={
                  selectedCategories.includes(category)
                    ? "Selected"
                    : "Select at least one item"
                }
                placement="top"
              >
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "yellow",
                    width: "50%",
                    font: "cursive",
                    color: "black",
                    fontWeight: "900",
                  }}
                >
                  <Link href={`/${category.replace(/\s/g, "")}`}>choose</Link>
                </Button>
              </Tooltip>
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
      <div
        style={{
          textAlign: "center",
          font: "cursive",
          color: "red",
        }}
      >
        {selectedCategories.length == 0 ? "No item Selected" : " "}
      </div>
      <div
        style={{
          textAlign: "center",
          font: "cursive",
          color: "gray",
        }}
      >
        {selectedCategories.length == 6
          ? "proceed to order"
          : "select at least 6 items"}
      </div>
      <Button
        type="primary"
        style={{
          marginLeft: "300px",
          marginTop: "40px",
          backgroundColor: "white",
          width: "50%",
          font: "cursive",
          color: "black",
          fontWeight: "900",
        }}
        disabled={selectedCategories.length != 6}
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

// export const getStaticProps = async () => {
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
