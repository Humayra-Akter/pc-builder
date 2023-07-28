import { Button } from "antd";
import Link from "next/link";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";

const ProductPage = () => {
  return (
    <div>
      <h1>productssssssssss🧷 </h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
