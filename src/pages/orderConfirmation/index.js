import OrderConfirmationPage from "@/components/UI/OrderConfirmationPage";
import RootLayout from "../../../components/Layouts/RootLayout";

const orderConfirmation = () => {
  return <OrderConfirmationPage></OrderConfirmationPage>;
};

export default orderConfirmation;
orderConfirmation.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
