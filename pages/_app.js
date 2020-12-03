import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
    <Component {...pageProps} />
  </>
}

export default MyApp
