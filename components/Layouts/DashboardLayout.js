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
  getItem("All", "1", <Link href="/pcbuilder"></Link>),
  getItem("Processor", "2", <Link href="/processor"></Link>),
  getItem("Motherboard", "3", <Link href="/motherboard"></Link>),
  getItem("RAM", "4", <Link href="/ram"></Link>),
  getItem("Power Supply Unit", "5", <Link href="/powerSupplyUnit"></Link>),
  getItem("Storage Device", "6", <Link href="/storageDevice"></Link>),
  getItem("Monitor", "7", <Link href="/monitor"></Link>),
];

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />

        <Menu
          style={{ color: "white", fontFamily: "cursive", paddingTop: "150px" }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            color: "black",
            fontFamily: "cursive",
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <Button>
                <Link href="/">Choose Your Need!!!</Link>
              </Button>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
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
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
