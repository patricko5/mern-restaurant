import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /**
   * It will always show Navbar and Footer in every page 
   * if we cover Component Tag with Layout Component.
   * TIME: 8:05
   */
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
