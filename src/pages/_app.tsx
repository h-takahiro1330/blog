import { Layout } from '~/components/organisms/common/Layout'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
