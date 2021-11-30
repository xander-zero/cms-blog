import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import Layout from "../Layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
