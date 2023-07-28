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
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Button>
            <Link href="/pcbuilder">PC Builder</Link>
          </Button>
          <Button>
            <Link href="/processor">CPU / Processor</Link>
          </Button>
          <Button>
            <Link href="/motherboard">Motherboard</Link>
          </Button>
          <Button>
            <Link href="/ram">RAM</Link>
          </Button>
          <Button>
            <Link href="/powerSupplyUnit">Power Supply Unit</Link>
          </Button>
          <Button>
            <Link href="/storageDevice">Storage Device</Link>
          </Button>
          <Button>
            <Link href="/monitor">Monitor</Link>
          </Button>
          <Button>
            <Link href="/others">Others</Link>
          </Button>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height: "100vh",
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
  );
};
export default RootLayout;
