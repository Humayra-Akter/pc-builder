import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../components/UI/CartContext";


export default function MyApp({ Component, pageProps }) {
 
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
    </SessionProvider>

    // <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
