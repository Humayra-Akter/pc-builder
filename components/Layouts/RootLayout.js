import { Breadcrumb, Button, Modal, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const { data: session } = useSession();

  return (
    <Layout
      style={{
        background: "black",
      }}
      className="layout"
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/"
          >
            🖥
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/pcbuilder"
          >
            PC Builder
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/processor"
          >
            CPU / Processor
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/motherboard"
          >
            Motherboard
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/ram"
          >
            RAM
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/powerSupplyUnit"
          >
            Power Supply Unit
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/storageDevice"
          >
            Storage Device
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/monitor"
          >
            Monitor
          </Link>
          <Link
            style={{
              fontFamily: "cursive",
              background: "black",
              color: "yellow",
              fontWeight: "800",
              paddingRight: "50px",
            }}
            href="/about"
          >
            About
          </Link>

          {session?.user ? (
            <div
              style={{
                fontFamily: "cursive",
                background: "black",
              }}
            >
              <a
                style={{
                  background: "black",
                  paddingRight: "50px",
                  fontFamily: "cursive",
                  color: "red",
                  fontWeight: "800",
                  cursor: "pointer",
                }}
                onClick={() => setIsLogoutModalVisible(true)}
              >
                Logout
              </a>
              <Modal
                title="Logout Confirmation"
                visible={isLogoutModalVisible}
                onOk={() => {
                  signOut();
                  setIsLogoutModalVisible(false);
                }}
                onCancel={() => setIsLogoutModalVisible(false)}
                okText="Logout"
                okType="danger"
                style={{
                  background: "black",
                  fontFamily: "cursive",
                  background: "black",
                  textAlign: "center",
                }}
                bodyStyle={{ color: "white" }}
              >
                <p
                  style={{
                    fontFamily: "cursive",
                    background: "white",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Are you sure you want to logout?
                </p>
              </Modal>
            </div>
          ) : (
            <Link
              style={{
                fontFamily: "cursive",
                background: "black",
                color: "yellow",
                fontWeight: "800",
                paddingRight: "50px",
              }}
              href="/login"
            >
              Login
            </Link>
          )}
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
