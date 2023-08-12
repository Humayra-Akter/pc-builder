import RootLayout from "../../components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import HomeProducts from "@/components/UI/HomeProducts";

import { useSession, signIn, signOut } from "next-auth/react";

const HomePage = ({ allProcessors }) => {
  const { data: session } = useSession();

  return (
    <div className="body" style={{ color: "black", fontFamily: "cursive" }}>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          marginBottom: "30px",
          font: "cursive",
          color: "black",
          fontSize: "30px",
          fontWeight: "800",
        }}
      >
        Welcome {session?.user?.name}
      </h1>
      <Banner></Banner>
      <HomeProducts allProcessors={allProcessors}></HomeProducts>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/banners");
  const data = await res.json();
  return {
    props: {
      allProcessors: data,
    },
  };
};
