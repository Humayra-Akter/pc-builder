import RootLayout from "../../components/Layouts/RootLayout";
import Image from "next/image";
import AllProcessors from "@/components/UI/AllProcessors";

const HomePage = ({ allProcessors }) => {
  return (
    <div style={{ color: "black", fontFamily: "cursive" }}>
      <h1>Hi Homieeeeeeeeeeeeeee</h1>
      <Image
        src="/image/pc-ge922de72c_1280.jpg"
        width={500}
        height={200}
        responsive
        alt="processors image"
      />
      <AllProcessors allProcessors={allProcessors}></AllProcessors>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/processors");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProcessors: data,
    },
    revalidate: 10,
  };
};
