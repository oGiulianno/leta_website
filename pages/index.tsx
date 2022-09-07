import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					LETA - PUC Goiás
				</title>

				<meta name='description' content='LETA'/>

				<link rel='icon' href='/favicon.ico'/>
			</Head>
		</div>
	)
}

export default Home