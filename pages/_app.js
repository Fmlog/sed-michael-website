import Layout from "../components/Layout";
import "../styles/globals.scss";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
 
  return (
    <Layout>
      <Cursor/>
      <div className="navspace"/>
      <Component {...pageProps} />

    </Layout>
  );
}

export default MyApp;
