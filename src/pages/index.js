import RootLayout from "../../components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import HomeProducts from "@/components/UI/HomeProducts";

const HomePage = ({ allProcessors }) => {
  return (
    <div style={{ color: "black", fontFamily: "cursive" }}>
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
