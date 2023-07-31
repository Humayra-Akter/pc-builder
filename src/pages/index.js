import RootLayout from "../../components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import HomeProducts from "@/components/UI/HomeProducts";
import { useGetProcessorsQuery } from "@/redux/api/api";

const HomePage = ({ allProcessors }) => {
  const { data, isError, isLoading } = useGetProcessorsQuery();
  console.log(data);
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
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/banners");
  const data = await res.json();
  return {
    props: {
      allProcessors: data,
    },
    revalidate: 10,
  };
};
