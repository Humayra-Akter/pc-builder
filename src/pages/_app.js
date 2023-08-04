import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { CartProvider } from "../components/UI/CartContext";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    // <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
