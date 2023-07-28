import RootLayout from "../../components/Layouts/RootLayout";
import Processor from "./processor";

const HomePage = ({ allProcessors }) => {
  return (
    <div style={{ color: "black", fontFamily: "cursive" }}>
      <h1>Hi Homieeeeeeeeeeeeeee</h1>
      <Processor allProcessors={allProcessors} />
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
