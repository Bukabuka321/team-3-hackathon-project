import Layout from '../components/layout.jsx'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
