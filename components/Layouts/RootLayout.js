import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Link style={{ paddingRight: "50px" }} href="/">
            🖥
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/pcbuilder">
            PC Builder
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/processor">
            CPU / Processor
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/motherboard">
            Motherboard
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/ram">
            RAM
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/powerSupplyUnit">
            Power Supply Unit
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/storageDevice">
            Storage Device
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/monitor">
            Monitor
          </Link>
          <Link style={{ paddingRight: "50px" }} href="/about">
            About
          </Link>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height: "full-screen",
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
        TECHO-HUNT ©2023 Created by HAR
      </Footer>
    </Layout>
  );
};
export default RootLayout;
