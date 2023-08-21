import { Button, Input } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import RootLayout from "../../components/Layouts/RootLayout";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div
      style={{
        fontSize: "15px",
        margin: "10% auto",
        width: "40%",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "30px",
        color: "black",
        padding: "70px ",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "30px",
          fontFamily: "cursive",
          letterSpacing: "2px",
          fontWeight: "800",
          backgroundColor: "white",
          color: "black",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
        LOGIN
      </h3>
      <div
        className="line"
        style={{
          height: "3px",
          margin: "20px 0",
          width: "100%",
          background: "black",
        }}
      ></div>
      {/* <hr /> */}
      <div
        style={{
          width: "30%",
          fontSize: "40px",
          margin: "40px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <GoogleOutlined
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://pc-builder-sage-pi.vercel.app",
            })
          }
        />
        <GithubOutlined
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://pc-builder-sage-pi.vercel.app",
            })
          }
        />
      </div>
      {/* <form
          style={{
            fontSize: "15px",
            margin: "20px",
            width: "90%",
            justifyItems: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "50px 50px",
            margin: "50px 50px",
            letterSpacing: "2px",
            textAlign: "center",
            color: "black",
            fontWeight: "700",
            borderRadius: "7px",
          }}
        >
          <label htmlFor="">Your Email</label>
          <Input
            style={{
              fontSize: "15px",
              margin: "20px",
              width: "50%",
              backgroundColor: "white",
              letterSpacing: "2px",
              textAlign: "center",
              color: "black",
              fontWeight: "700",
              borderRadius: "30px",
              justifyItems: "self-end",
            }}
            type="email"
          />
          <br />
          <label htmlFor="">Your Password</label>
          <Input
            style={{
              fontSize: "15px",
              margin: "20px",
              width: "50%",
              backgroundColor: "white",
              letterSpacing: "2px",
              textAlign: "center",
              color: "black",
              fontWeight: "700",
              borderRadius: "30px",
            }}
            type="password"
          />

          <Button
            style={{
              fontSize: "15px",
              marginTop: "50px",
              width: "50%",
              justifyItems: "center",
              alignItems: "center",
              backgroundColor: "white",
              color: "black",
              padding: "2px 5px",
              letterSpacing: "3px",
              textAlign: "center",
              fontWeight: "800",
              borderRadius: "100px",
            }}
          >
            Login
          </Button>
          <p
            style={{
              fontFamily: "cursive",
              color: "white",
              fontWeight: "black",
            }}
          ></p>
        </form> */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
