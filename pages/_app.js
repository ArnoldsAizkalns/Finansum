import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}

export default MyApp
