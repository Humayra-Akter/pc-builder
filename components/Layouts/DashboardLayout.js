import React, { useState } from "react";

import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  // getItem("All", "1", <Link href="/pcbuilder"></Link>),
  getItem("Processor", "2", <Link href="/processor"></Link>),
  getItem("Motherboard", "3", <Link href="/motherboard"></Link>),
  getItem("RAM", "4", <Link href="/ram"></Link>),
  getItem("Power Supply Unit", "5", <Link href="/powerSupplyUnit"></Link>),
  getItem("Storage Device", "6", <Link href="/storageDevice"></Link>),
  getItem("Monitor", "7", <Link href="/monitor"></Link>),
];

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "black",
      }}
    >
      <Sider
        style={{
          background: "black",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />

        <Menu
          style={{
            color: "yellow",
            fontFamily: "cursive",
            background: "black",
            paddingTop: "150px",
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 16px",
            background: "black",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
              background: "black",
            }}
          >
            <Breadcrumb.Item>
              <Button
                style={{
                  fontSize: "15px",
                  marginLeft: "15px",
                  marginTop: "10px",
                  width: "100%",
                  backgroundColor: "white",
                  color: "black",
                  padding: "2px 5px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  fontWeight: "800",
                }}
              >
                <Link href="/">Home</Link>
              </Button>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Button
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  width: "100%",
                  backgroundColor: "white",
                  color: "black",
                  padding: "2px 5px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  fontWeight: "800",
                }}
              >
                <Link href="/pcbuilder">PC-builder</Link>
              </Button>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "black",
              color: "black",
              fontFamily: "cursive",
            }}
          >
            {children}
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          TECHO HUNT ©2023 Created by HAR
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
