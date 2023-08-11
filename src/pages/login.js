import { Button, Input } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import RootLayout from "../../components/Layouts/RootLayout";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "15px",
          margin: "20px auto",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          backgroundColor: "#000",
          color: "white",
          padding: "70px ",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "30px",
            fontWeight: "800",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
          }}
        >
          LOGIN
        </h3>
        <div
          style={{
            width: "10%",
            fontSize: "40px",
            margin: "40px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000" })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000" })
            }
          />
        </div>
        <hr />
        <form
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
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
